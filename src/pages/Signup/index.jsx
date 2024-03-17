import AuthBg from '../../components/Auth/AuthBg';
import SignupComponent from '../../components/Auth/SignupComponent';
import styles from './Signup.module.scss';
const Signup = () => {
  return (
    <div className="signup__container">
      <div className={styles.root}>
        <AuthBg />
        <div className={styles.login__content}>
          <SignupComponent />
        </div>
      </div>
    </div>
  );
};

export default Signup;
