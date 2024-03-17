import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Phone.module.scss';
import PhoneFilter from '../../components/PhoneFilter';
import Card from '../../components/Card';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Navigation from '../../layouts/Navigation';
import Skeleton from '../../components/UI/Skeletons/Skeleton/index';
import { getProducts } from '../../redux/slices/productsSlice';
import GoBack from '../../components/UI/GoBack';

const Phone = () => {
  const dispatch = useDispatch();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts({ category: 'Телефон' }));
  }, [dispatch]);

  
  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="phone__container">
        <div className={styles.root}>
          <div className={styles.top}>
            <h1 className="title">Телефоны</h1>
            <GoBack />
          </div>
          <div className={styles.phone_content}>
            <div className={styles.filter}>
              <PhoneFilter category={'Телефон'} />
            </div>
            <div className={styles.list}>
              {isLoading
                ? skeletons.map((item) => <Skeleton />)
                : products.map((item) => <Card key={item.id} item={item} path="phone" />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Phone;
