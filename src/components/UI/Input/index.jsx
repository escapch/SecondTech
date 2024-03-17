import React from 'react';
import styles from './Input.module.scss';
import { ErrorMessage, Field } from 'formik';
const Input = ({ name, type, label, onChange, onBlur, value }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input type={type} id={name} name={name} onChange={onChange} onBlur={onBlur} value={value} />
      {/* <ErrorMessage name={name} component="div" className={styles.error} /> */}
    </>
  );
};

export default Input;
