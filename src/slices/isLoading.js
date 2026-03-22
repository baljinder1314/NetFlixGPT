import { createSlice } from '@reduxjs/toolkit';

const isLoading = createSlice({
  name: 'isLoading',
  initialState: false,

  reducers: {
    loading: () => {
      return true;
    },
    notLoading: () => {
      return false;
    },
  },
});

export const { loading, notLoading } = isLoading.actions;

export default isLoading.reducer;
