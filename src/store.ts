import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./features/images/images-slice";
import { loadingReducer } from "./features/loading/loading-slice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    loading: loadingReducer,
  },
});
