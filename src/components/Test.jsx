import axios from 'axios';
import React, { useEffect } from 'react';

const Test = () => {
  const datas = {
    category: 'Ноутбук',
    brand: null,
    color: null,
    priceFrom: null,
    priceTo: null,
  };
  const getData = async () => {
    try {
      const { data } = await axios.post('http://localhost:5183/api/Product/getall', datas);

      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>Test</div>;
};

export default Test;
