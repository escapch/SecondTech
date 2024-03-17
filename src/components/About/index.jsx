import styles from './About.module.scss';
import aboutBg from '../../assets/Backgrounds/about-bg.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.root}>
      {/* <img src={aboutBg} alt="about img" /> */}
      <div className="about__container">
        <div className={styles.content}>
          <h1 className="title">О нас</h1>
          <p>
            Добро пожаловать в SecondTech – ваш источник качественно использованных телефонов и
            ноутбуков! Мы – команда энтузиастов, которая стремится сделать технологии доступными и
            экологичными.
          </p>
          <Link to="#">Read more...</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
