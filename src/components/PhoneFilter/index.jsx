import axios from 'axios';
import styles from './PhoneFilter.module.scss';
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { BASE_URL } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import FilterSkeleton from '../UI/Skeletons/FilterSkeleton';
import { getProducts } from '../../redux/slices/productsSlice';

const PhoneFilter = ({ category }) => {
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getParams = async (parametr, setState) => {
      try {
        const { data } = await axios.get(`${BASE_URL}/${parametr}/getall`);

        setState(data);
      } catch (error) {
        console.log(error);
      }
    };

    getParams('Color', setColors);
    getParams('Brand', setBrands);
  }, []);

  const { values, handleBlur, handleChange, handleSubmit, touched, errors, resetForm } = useFormik({
    initialValues: {
      category: category,
      brand: '',
      color: '',
      priceFrom: null,
      priceTo: null,
    },
    onSubmit: () => {
      console.log(values);
      dispatch(getProducts(values));
      // resetForm();
    },
  });
  return (
    <div className={styles.root}>
      {colors.length !== 0 && brands.length !== 0 ? (
        <div className={styles.accord}>
          <form onSubmit={handleSubmit}>
            <div className={styles.li_wrap}>
              <div className={styles.title}>
                <h2>Цена (сом)</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                >
                  <path d="M17 1L9 9L1 1" stroke="black" strokeWidth="1.6" />
                </svg>
              </div>
              <div className={styles.content}>
                <div className={styles.price_input}>
                  <div>
                    <label htmlFor="from">От</label>
                    <input
                      type="number"
                      id="from"
                      name="priceFrom"
                      placeholder="5000"
                      value={values.priceFrom}
                      onChange={(e) => handleChange(e)}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="to">До</label>
                    <input
                      type="number"
                      id="to"
                      name="priceTo"
                      placeholder="100 000"
                      value={values.priceTo}
                      onChange={(e) => handleChange(e)}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.li_wrap}>
              <div className={styles.title}>
                <h2>Цвет</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                >
                  <path d="M17 1L9 9L1 1" stroke="black" strokeWidth="1.6" />
                </svg>
              </div>
              <div className={styles.content}>
                <div className={styles.color_input}>
                  {colors.map((item) => (
                    <div key={item.id}>
                      <input
                        type="radio"
                        key={item.id}
                        name="color"
                        value={item.name || ''}
                        checked={values.color.includes(item.name)}
                        onChange={handleChange}
                      />
                      <label htmlFor="checkbox">{item.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.li_wrap}>
              <div className={styles.title}>
                <h2>Бренд</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                >
                  <path d="M17 1L9 9L1 1" stroke="black" strokeWidth="1.6" />
                </svg>
              </div>
              <div className={styles.content}>
                <div className={styles.color_input}>
                  {brands.map((item) => (
                    <div>
                      <input
                        type="radio"
                        key={item.id}
                        name="brand"
                        value={item.name || ''}
                        checked={values.brand.includes(item.name)}
                        onChange={handleChange}
                      />
                      <label htmlFor="checkbox">{item.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button type="submit">Применить</button>
            <div onClick={() => resetForm()}>Очистить</div>
          </form>
        </div>
      ) : (
        <FilterSkeleton />
      )}
    </div>
  );
};

export default PhoneFilter;
