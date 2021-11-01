import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: '',
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export const selectTheme = state => state.theme.color;

export default themeSlice.reducer;
