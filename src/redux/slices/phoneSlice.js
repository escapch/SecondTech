import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getPhone = createAsyncThunk('productPhone/getPhone', async (params = {}) => {
  const { brand = null, color = null, priceFrom = null, priceTo = null } = params;
  const datas = {
    category: 'Телефон',
    brand,
    color,
    priceFrom,
    priceTo,
  };
  const { data } = await axios.post(`${BASE_URL}/Product/getall`, datas);
  return data;
});

const initialState = {
  phones: [],
  isLoading: true,
  phoneId: 0,
  getPhoneDatas: {
    category: 'Телефон',
    brand: null,
    color: null,
    priceFrom: null,
    priceTo: null,
  },
};

export const phoneSlice = createSlice({
  name: 'productPhone',
  initialState,

  reducers: {
    setPhoneItems: (state, action) => {
      state.phoneItems = action.payload;
    },
    setPhoneId: (state, action) => {
      state.phoneId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPhone.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(getPhone.fulfilled, (state, action) => {
      state.phones = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(getPhone.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const { setPhoneItems, setPhoneId } = phoneSlice.actions;

export default phoneSlice.reducer;
