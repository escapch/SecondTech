import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopular } from '../../redux/slices/popularSlice';

import Card from '../Card';
import styles from './Popular.module.scss';
import Skeleton from '../UI/Skeletons/Skeleton/';
const Popular = () => {
  const dispatch = useDispatch();
  const { popular, isLoading } = useSelector((state) => state.popular);
  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);
  console.log(isLoading);
  return (
    <div className="popular__container">
      <div className={styles.root}>
        <h1 className="title">Популярные телефоны и ноутбуки</h1>
        <div className={styles.cards}>
          <ul>
            {isLoading ? <Skeleton /> : popular.map((item, id) => <Card key={id} {...item} />)}
          </ul>
          <a href="" className="linkToCategory">
            <p>ПЕРЕЙТИ В КАТАЛОГ</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popular;
