import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./features/images/images-slice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});
