import styles from './Login.module.scss';

import LoginComponent from '../../components/Auth/LoginComponent';
import AuthBg from '../../components/Auth/AuthBg';
const Login = () => {
  return (
    <div className="login__container">
      <div className={styles.root}>
        <AuthBg />
        <div className={styles.login__content}>
          <LoginComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;
