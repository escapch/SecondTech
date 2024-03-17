import { useState } from 'react';
import styles from './LoginComponent.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { loginSchema } from '../../schemas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loginSchema } from '../../../schemas';

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const notify = (text) => {
    toast.error(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  const { values, handleBlur, handleChange, handleSubmit, touched, errors, resetForm } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async () => {
      // notify('Неверный логин или пароль');
      await axios.post('https://6a268ee12354b187.mokky.dev/auth', values).then((response) => {
        console.log(response);
      });
    },
  });

  console.log(errors);
  return (
    <div className={styles.root}>
      <p className="title">Вэлком бэк!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введи логин"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className={errors.username && touched.username ? 'error-input input' : 'input'}
        />
        <div className={styles.password__input}>
          <input
            type={showPassword ? 'text' : 'password'}
            className="input"
            placeholder="Введи пароль"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              onClick={() => setShowPassword(false)}
            >
              <path
                d="M15.9996 23.4606C17.0087 23.4606 17.9303 23.3507 18.7708 23.1609L16.8967 21.2868C16.6055 21.3092 16.31 21.3273 15.9996 21.3273C10.292 21.3273 8.08088 17.225 7.54543 15.9941C7.94749 15.0968 8.49052 14.2696 9.15392 13.544L7.66276 12.0528C6.02226 13.8309 5.40041 15.6218 5.38868 15.657C5.3151 15.876 5.3151 16.1131 5.38868 16.3322C5.41108 16.4026 7.85795 23.4606 15.9996 23.4606ZM15.9996 8.5275C14.0402 8.5275 12.4306 8.94989 11.0888 9.57388L7.15397 5.64008L5.64574 7.14832L24.8453 26.348L26.3535 24.8398L22.8133 21.2996C25.6015 19.2185 26.5967 16.377 26.6116 16.3322C26.6852 16.1131 26.6852 15.876 26.6116 15.657C26.5882 15.5855 24.1413 8.5275 15.9996 8.5275ZM21.303 19.7892L18.871 17.3572C19.0737 16.9412 19.1996 16.4836 19.1996 15.9941C19.1996 14.2437 17.75 12.7941 15.9996 12.7941C15.51 12.7941 15.0525 12.92 14.6375 13.1237L12.709 11.1952C13.7677 10.8319 14.8804 10.6512 15.9996 10.6608C21.7072 10.6608 23.9184 14.7631 24.4538 15.9941C24.1317 16.7322 23.2101 18.4922 21.303 19.7892Z"
                fill="#767676"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              onClick={() => setShowPassword(true)}
            >
              <path
                d="M16.0002 12.8172C15.1578 12.8228 14.3514 13.1599 13.7558 13.7556C13.1601 14.3513 12.8229 15.1576 12.8174 16C12.8174 17.742 14.2581 19.1828 16.0002 19.1828C17.7412 19.1828 19.183 17.742 19.183 16C19.183 14.259 17.7412 12.8172 16.0002 12.8172Z"
                fill="#767676"
              />
              <path
                d="M16.0002 8.5733C7.90203 8.5733 5.46824 15.5935 5.44596 15.6646L5.3335 15.9998L5.44489 16.3351C5.46824 16.4062 7.90203 23.4264 16.0002 23.4264C24.0983 23.4264 26.5321 16.4062 26.5544 16.3351L26.6668 15.9998L26.5554 15.6646C26.5321 15.5935 24.0983 8.5733 16.0002 8.5733ZM16.0002 21.3045C10.3231 21.3045 8.12376 17.2241 7.59117 15.9998C8.12588 14.7713 10.3263 10.6952 16.0002 10.6952C21.6772 10.6952 23.8766 14.7755 24.4092 15.9998C23.8744 17.2284 21.6741 21.3045 16.0002 21.3045Z"
                fill="#767676"
              />
            </svg>
          )}
        </div>

        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
      <Link to="/signup" className="link">
        У меня еще нет аккаунта
      </Link>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default LoginComponent;
