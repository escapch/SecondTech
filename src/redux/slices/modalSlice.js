import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

const initialState = {
  deleteModal: false,
  updateModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
    setUpdateModal: (state, action) => {
      state.updateModal = action.payload;
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(getPhone.pending, (state) => {
  //       state.isLoading = true;
  //       console.log('pending');
  //     });

  //     builder.addCase(getPhone.fulfilled, (state, action) => {
  //       state.phones = action.payload;
  //       state.isLoading = false;
  //       console.log('succes');
  //     });

  //     builder.addCase(getPhone.rejected, (state) => {
  //       state.isLoading = false;
  //       console.log('rejected');
  //     });
  //   },
});

export const { setDeleteModal, setUpdateModal } = modalSlice.actions;

export default modalSlice.reducer;
