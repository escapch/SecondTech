import React, { useEffect } from 'react';
import styles from './Products.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/slices/productsSlice';
import Skeleton from '../../UI/Skeletons/Skeleton';
import Card from '../../Card';
import DeleteModal from '../components/DeleteModal';
const Products = () => {
  const skeleton = [1, 2, 3, 4];
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.root}>
      <DeleteModal />
      <div className={styles.title}>
        <h1>Товары</h1>
      </div>
      <div className={styles.list}>
        {isLoading
          ? skeleton.map((item) => <Skeleton />)
          : products.map((item) => <Card mode="admin" {...item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Products;
