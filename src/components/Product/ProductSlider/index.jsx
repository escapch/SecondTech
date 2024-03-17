import styles from './ProductSlider.module.scss';
import back from '../../../assets/Icons/back.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';
import GoBack from '../../UI/GoBack';

const ProductSlider = ({ imgUrl }) => {
  const [imgData, setimgData] = useState([imgUrl, imgUrl, imgUrl]);

  const rightArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
      <path d="M14 2L28 16L14 30" stroke="black" strokeWidth="3" />
      <path d="M28 16H0" stroke="black" strokeWidth="3" />
    </svg>
  );

  const leftArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
      <path d="M17 2L3 16L17 30" stroke="black" strokeWidth="3" />
      <path d="M3 16H31" stroke="black" strokeWidth="3" />
    </svg>
  );

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: rightArrowSvg,
    prevArrow: leftArrowSvg,
  };

  return (
    <div className={styles.image_wrapper}>
      <div className={styles.image__top}>
        <GoBack />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="29.5" fill="black" stroke="black" />
          <path
            d="M42.371 23.7134C41.9676 22.791 41.3859 21.9552 40.6585 21.2527C39.9306 20.5481 39.0723 19.9881 38.1304 19.6033C37.1537 19.2027 36.1062 18.9976 35.0486 19C33.5649 19 32.1172 19.4012 30.8592 20.159C30.5583 20.3403 30.2724 20.5394 30.0015 20.7564C29.7306 20.5394 29.4447 20.3403 29.1438 20.159C27.8857 19.4012 26.4381 19 24.9544 19C23.886 19 22.8507 19.2021 21.8725 19.6033C20.9275 19.9897 20.0758 20.5454 19.3445 21.2527C18.6161 21.9544 18.0343 22.7904 17.632 23.7134C17.2137 24.6733 17 25.6927 17 26.7417C17 27.7313 17.2047 28.7626 17.6109 29.8117C17.951 30.6884 18.4386 31.5977 19.0616 32.516C20.0487 33.9693 21.4061 35.4849 23.0914 37.0214C25.8844 39.5683 28.6502 41.3276 28.7676 41.3989L29.4808 41.8507C29.7968 42.0498 30.2031 42.0498 30.5191 41.8507L31.2324 41.3989C31.3498 41.3246 34.1126 39.5683 36.9085 37.0214C38.5939 35.4849 39.9512 33.9693 40.9384 32.516C41.5614 31.5977 42.0519 30.6884 42.389 29.8117C42.7953 28.7626 43 27.7313 43 26.7417C43.003 25.6927 42.7893 24.6733 42.371 23.7134V23.7134Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.gallery}>
        <Slider {...settings}>
          {imgData.map((item, i) => (
            <div className={styles.slide} key={i}>
              <img src={item} alt="Smartphone img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
