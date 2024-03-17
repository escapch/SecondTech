import React from 'react';
import Slider from 'react-slick';
import styles from './Gallery.module.scss';
import img from '../../assets/Slider-img/img.png';
import img2 from '../../assets/Slider-img/img2.png';
import img3 from '../../assets/Slider-img/img3.png';
import img4 from '../../assets/Slider-img/img4.png';
import img5 from '../../assets/Slider-img/img5.png';
import img7 from '../../assets/Slider-img/img7.png';
import img8 from '../../assets/Slider-img/img8.png';
import img9 from '../../assets/Slider-img/img9.png';
import img10 from '../../assets/Slider-img/img10.png';
import img11 from '../../assets/Slider-img/img11.png';
import img12 from '../../assets/Slider-img/img12.png';
import img13 from '../../assets/Slider-img/img13.png';
import img14 from '../../assets/Slider-img/img14.png';

const Gallery = () => {
  const settings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    variableWidth: true,
    pauseOnHover: false,
    cssEase: 'linear',
  };

  const images = [img, img2, img3, img4, img8, img5, img7, img9, img10, img11, img12, img13, img14];

  return (
    <div className={styles.root}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
