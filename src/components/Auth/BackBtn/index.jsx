import { Link } from 'react-router-dom';
import styles from './BackBtn.module.scss';
const BackBtn = () => {
  return (
    <div className={styles.root}>
      <Link to="/login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="27"
          viewBox="0 0 70 47"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="69" height="46" rx="11.5" fill="black" stroke="black" />
          <path d="M35 11L23 23L35 35" stroke="white" strokeWidth="3" />
          <path d="M23 23H47" stroke="white" strokeWidth="3" />
        </svg>
      </Link>
      <p>Назад</p>
    </div>
  );
};

export default BackBtn;
