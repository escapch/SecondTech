import React from 'react';
import styles from './SelectField.module.scss';
import { ErrorMessage, Field } from 'formik';
const SelectField = ({ data, name, label, onChange, onBlur, value }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <select id={name} name={name} onChange={onChange} onBlur={onBlur}>
        {data.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
      {/* <ErrorMessage name={name} component="div" className={styles.error} /> */}
    </>
  );
};

export default SelectField;
