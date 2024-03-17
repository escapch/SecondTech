import React from 'react';

import Slider from 'react-slick';
import styles from './Main.module.scss';
import img1 from '../../assets/Main-img/image 12.png';
import img2 from '../../assets/Main-img/image 13.png';
import img3 from '../../assets/Main-img/image 14.png';
const images = [img1, img2, img3];

const Main = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="main__container">
      <div className={styles.root}>
        <div className={styles.title_content}>
          <h1>Интернет магазин Б/У телефонов и ноутбуков</h1>
          <p>время менять технику, не меняя кошелек!</p>
          <a href="#category" className="linkToCategory">
            ПЕРЕЙТИ В КАТЕГОРИИ
          </a>
        </div>
        <div className={styles.slider_content}>
          <Slider {...settings}>
            <div className={styles.slide}>
              <img src={img1} />
            </div>
            <div className={styles.slide}>
              <img src={img2} />
            </div>
            <div className={styles.slide}>
              <img src={img3} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Main;
