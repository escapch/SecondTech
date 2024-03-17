import styles from './PhoneDetails.module.scss';
import Header from '../../layouts/Header';
import Navigation from '../../layouts/Navigation';
import ProductSlider from '../Product/ProductSlider';
import ProductDescription from '../Product/ProductDescription';
import ProductCharact from '../Product/ProductCharact';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import Footer from '../../layouts/Footer';

const PhoneDeatails = () => {
  const phoneId = useSelector((state) => state.phone.phoneId);
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchItemById = async () => {
    try {
      const productId = localStorage.getItem('productId');
      const { data } = await axios.get(`${BASE_URL}/Product/get?id=${productId}`);
      setItem(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error, 'Error');
    }
  };

  useEffect(() => {
    fetchItemById();
  }, []);

  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="details__container">
        <div className={styles.root}>
          <div className={styles.main}>
            {isLoading ? <p>Pending</p> : <ProductSlider {...item} />}
            {isLoading ? <p>Pending</p> : <ProductDescription item={item} />}
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="details__container">
        {isLoading ? <p>Pending</p> : <ProductCharact {...item} />}
      </div>
      <div className="line"></div>
      <Footer />
    </>
  );
};

export default PhoneDeatails;
