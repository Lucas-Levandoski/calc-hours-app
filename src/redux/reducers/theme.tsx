import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'dark',
  },
  reducers: {
    setDarkTheme: (state) => { state.value = 'dark'; },
    setLightTheme: (state) => { state.value = 'light'; }
  }
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;