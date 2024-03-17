import bg from '../../../assets/Icons/illustration.png';
import styles from './AuthBg.module.scss';
const AuthBg = () => {
  return (
    <div className={styles.login__bg}>
      <img src={bg} alt="walpaper" />
      <div className={styles.title__content}>
        <p className="name">Lorby</p>
        <p className="subtitle">Твой личный репетитор</p>
      </div>
    </div>
  );
};

export default AuthBg;
