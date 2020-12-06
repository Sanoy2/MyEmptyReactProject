import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counterSlice";
import themeReducer from "../redux/slices/themeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
