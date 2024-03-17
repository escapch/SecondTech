import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getPopular = createAsyncThunk('popular/getPopular', async (userId, thunkAPI) => {
  const { data } = await axios.get(`${BASE_URL}/items?rating[from]=7&rating[to]=10`);
  return data;
});
const initialState = {
  popular: [],
  isLoading: true,
};

export const popularSlice = createSlice({
  name: 'popular',
  initialState,

  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.popular = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getPopular.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setPopular, getPopula } = popularSlice.actions;

export default popularSlice.reducer;
