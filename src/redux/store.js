import { configureStore } from '@reduxjs/toolkit';
import phone from './slices/phoneSlice';
import popular from './slices/popularSlice';
import products from './slices/productsSlice';
import modal from './slices/modalSlice';
import cart from './slices/cartSlice';

export default configureStore({
  reducer: {
    phone,
    popular,
    products,
    modal,
    cart,
  },
});
