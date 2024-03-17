import { Link } from 'react-router-dom';
import styles from './Favorits.module.scss';
import Card from '../../components/Card';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Navigation from '../../layouts/Navigation';

const Favorits = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="favorits__container">
        <div className={styles.root}>
          <div className={styles.top}>
            <h1 className="title">Телефоны</h1>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="47"
                viewBox="0 0 70 47"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="69"
                  height="46"
                  rx="11.5"
                  fill="black"
                  stroke="black"
                />
                <path d="M35 11L23 23L35 35" stroke="white" strokeWidth="3" />
                <path d="M23 23H47" stroke="white" strokeWidth="3" />
              </svg>
            </Link>
          </div>
          <div className={styles.favorits_content}>
            <ul>
              {list.map((item) => (
                <Card />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorits;
