import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./features/images/images-slice";
import { loadingReducer } from "./features/loading/loading-slice";
import { gridLayoutReducer } from "./features/gridLayout/gridLayout-slice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    loading: loadingReducer,
    gridLayout: gridLayoutReducer,
  },
});
