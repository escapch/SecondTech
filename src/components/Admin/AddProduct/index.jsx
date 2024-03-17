import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
import {
  phoneBrands,
  laptopBrands,
  colors,
  rams,
  storages,
  initialValues,
  categories,
  states,
} from '../../../utils/productsData';
import Input from '../../UI/Input';
import SelectField from '../../UI/SelectField';
import { BASE_URL } from '../../../utils/constants';
import styles from './AddProduct.module.scss';
const AddProduct = () => {
  const [list, setList] = useState([0]);
  const [packageList, setPackageList] = useState([]);

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values) => {
        try { 
          const { data } = await axios.post(`${BASE_URL}/Product/create`, values);
          console.log('axios =', data);
        } catch (error) {
          console.error('Fetch error:', error);
        }
        console.log('local =', values);
      },
    });

  const addPackage = (e) => {
    setPackageList(e.target.value.trim().split(','));
    packageList.forEach((element, index) => {
      values.packageContents[index] = {
        content: element,
        category: { name: values.category.name },
      };
    });
  };

  const isDelete = (index) => {
    if (list.length > 1) {
      setList(list.filter((_, i) => i !== index));
      console.log('delete1=>', values.characteristics);
      console.log(index);
      values.characteristics.splice(index, 1);
      console.log('delete=>', values.characteristics);
    }
  };

  const isAdd = (index) => {
    const newValue = index;
    if (!list.includes(newValue)) {
      setList([...list, newValue]);
    }
  };

  return (
    <div className={styles.root}>
      <h2 className="title">Добавить продукт</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_content}>
          <div className={styles.left}>
            <SelectField
              name="category.name"
              label="Категория"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category.name}
              data={categories}
            />

            {values.category.name !== 'Ноутбук' ? (
              <SelectField
                name="brand.name"
                label="Бренд"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.brand.name}
                data={phoneBrands}
              />
            ) : (
              <SelectField
                name="brand.name"
                label="Бренд"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.brand.name}
                data={laptopBrands}
              />
            )}

            <Input
              name="name"
              type="text"
              label="Название"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <Input
              name="model"
              type="text"
              label="Модель"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.model}
            />

            {/* <label htmlFor="img">Фото:</label>
        <input
          type="file"
          name="img"
          id="img"
          onChange={(e) => {
            handleChange(e);
            console.log(e.target.files);

            values.img = e.currentTarget.files[0];
          }}
          onBlur={handleBlur}
          value={values.img}
          accept="image/*, .png, .jpg, .web"
        /> */}

            <SelectField
              name="ram"
              label="RAM"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ram}
              data={rams}
            />

            <SelectField
              name="storage"
              label="Объем оперативной памяти"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.storage}
              data={storages}
            />

            <SelectField
              name="color.name"
              label="Цвет"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color.name}
              data={colors}
            />

            <SelectField
              name="state"
              label="Состояние"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              data={states}
            />

            <Input
              name="processor"
              type="text"
              label="Процессор"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.processor}
            />

            <Input
              name="battery"
              type="text"
              label="Батарейка (емкость)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.battery}
            />
          </div>
          <div className={styles.right}>
            <Input
              name="price"
              type="number"
              label="Цена"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />

            <label htmlFor="description">Описание</label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder="Красивая поверхность титановых ..."
            />

            <label htmlFor="characteristics">
              Категория: <span>{values.category.name}</span>
            </label>

            <label>Характеристики:</label>
            {list.map((char, index) => (
              <div className={styles.add_characteristics} key={index}>
                <svg
                  onClick={() => isAdd(index + 1)}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                </svg>
                <svg
                  onClick={() => isDelete(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                </svg>
                <input
                  name={`characteristics[${index}].name`}
                  type="text"
                  placeholder="SIM card"
                  value={char.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Значение"
                  name={`characteristics[${index}].value`}
                  value={char.value}
                  onChange={handleChange}
                />
              </div>
            ))}

            <label>Комплектация:</label>
            <div className={styles.add_characteristics}>
              <input
                type="text"
                placeholder="Наушники, чехол, ..."
                value={packageList.content}
                onChange={(e) => addPackage(e)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Создать товар</button>
      </form>
    </div>
  );
};

export default AddProduct;
