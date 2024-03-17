import { useEffect } from 'react';
import styles from './Category.module.scss';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productsSlice';
import phoneImg from '../../assets/Category-img/Smartphone.png';
import phoneImg2 from '../../assets/Category-img/Smartphone2.png';
import phoneImg3 from '../../assets/Category-img/Smartphone3.png';
import laptopImg from '../../assets/Category-img/Laptop.png';
import laptopImg2 from '../../assets/Category-img/Laptop2.png';
import laptopImg3 from '../../assets/Category-img/Laptop3.png';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="category__container">
      <div className={styles.root} id="category">
        <h1 className="title">Категории</h1>
        <div className={styles.category}>
          <div className={styles.content}>
            <Link to="/phone">
              <p>Телефоны</p>
              <img src={phoneImg} alt="image" />
            </Link>
          </div>
          <div className={styles.content}>
            <Link to="/laptop">
              <p>Ноутбуки</p>
              <img src={laptopImg} alt="image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
