import { IThemeState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IThemeState = {
  isDarkMode: false,
  isUserChange: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload: { isDarkMode, isUserChange } }) => {
      state.isDarkMode = isDarkMode;
      state.isUserChange = isUserChange;
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.isUserChange = true;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;