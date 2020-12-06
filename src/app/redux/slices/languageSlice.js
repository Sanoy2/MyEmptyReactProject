import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    availableThemes: ['pl', 'eng'],
    currentLanguage: '',
  },
  reducers: {
    initialLanguageSet: (state, action) => {
      state.currentLanguage = action.payload;
    },
    switchLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { initialLanguageSet, switchLanguage } = languageSlice.actions;

export const availableLanguages = (state) => state.language.availableThemes;
export const currentLanguage = (state) => state.language.currentLanguage;

export default languageSlice.reducer;
