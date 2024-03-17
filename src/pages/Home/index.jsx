import styles from './Home.module.scss';
import Main from '../../components/Main';
import Category from '../../components/Category';
import Popular from '../../components/Popular';
import About from '../../components/About';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Navigation from '../../layouts/Navigation';
import Test from '../../components/test';
import Feedback from '../../components/Feedback';
import Slider from '../../components/Gallery';
const Home = () => {
  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <div className={styles.root}>
        <Main />
        <div className="line"></div>
        <Category />
        {/* <Popular /> */}

        <About />
        <Slider />
        <Feedback />
        <Footer />
      </div>
    </>
  );
};

export default Home;
