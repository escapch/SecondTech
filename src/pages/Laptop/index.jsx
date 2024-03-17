import React, { useEffect } from 'react';
import styles from './Laptop.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import Skeleton from '../../components/UI/Skeletons/Skeleton';
import back from '../../assets/Icons/back.svg';
import { getProducts } from '../../redux/slices/productsSlice';
import Card from '../../components/Card';
import DeleteModal from '../../components/Admin/components/DeleteModal';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Navigation from '../../layouts/Navigation';
import { Link } from 'react-router-dom';
import PhoneFilter from '../../components/PhoneFilter';
import GoBack from '../../components/UI/GoBack';
const Laptop = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts({ category: 'Ноутбук' }));
  }, [dispatch]);

  const { items } = useSelector((state) => state.cart);
  useEffect(() => {
    console.log('cart =', items);
  }, []);
  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="phone__container">
        <div className={styles.root}>
          <div className={styles.top}>
            <h1 className="title">Ноутбуки</h1>
            <GoBack />
          </div>
          <div className={styles.phone_content}>
            <div className={styles.filter}>
              <PhoneFilter category={'Ноутбук'} />
            </div>
            <div className={styles.list}>
              {isLoading
                ? skeletons.map((item) => <Skeleton />)
                : products.map((item) => <Card key={item.id} item={item} path="laptop" />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Laptop;
