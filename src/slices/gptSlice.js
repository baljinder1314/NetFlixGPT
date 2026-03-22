import { createSlice } from '@reduxjs/toolkit';

const gptSearch = createSlice({
  name: 'gpt',
  initialState: {
    gptToggle: false,
  },
  reducers: {
    toggle: (state) => {
      state.gptToggle = !state.gptToggle;
    },
  },
});
export const { toggle } = gptSearch.actions;
export default gptSearch.reducer;
