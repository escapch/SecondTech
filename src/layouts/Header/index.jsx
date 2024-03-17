import styles from './Header.module.scss';
import logo from '../../assets/Icons/logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className={styles.root}>
          <div className={styles.logo_wrapp}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.search}>
            <form>
              <input type="text" />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5345 20.9999C16.7806 20.9805 21.0183 16.7124 20.9999 11.4649C20.9805 6.21854 16.7115 1.98063 11.4655 2.00007C6.21938 2.01842 1.98171 6.28764 2.00006 11.534C2.01949 16.7815 6.28847 21.0194 11.5345 20.9999Z"
                    stroke="white"
                    strokeWidth="3.822"
                  />
                  <path d="M19 19L24.5207 24.5747" stroke="white" strokeWidth="3.822" />
                </svg>
              </button>
            </form>
          </div>
          <div className={styles.auth}>
            <Link to="/login">log in</Link>
            <Link to="/admin" className={styles.signup}>
              sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
