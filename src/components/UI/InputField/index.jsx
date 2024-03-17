import React from 'react';
import styles from './SelectField.module.scss';
import { ErrorMessage, Field } from 'formik';
const SelectField = ({ name, type, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <Field type={type} id={name} name={name} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </>
  );
};

export default SelectField;
