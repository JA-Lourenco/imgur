import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./features/images/images-slice";
import { loadingReducer } from "./features/loading/loading-slice";
import { gridLayoutReducer } from "./features/gridLayout/gridLayout-slice";
import { sectionReducer } from "./features/sections/sections-slice";
import { sortReducer } from "./features/sort/sort-slice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    loading: loadingReducer,
    gridLayout: gridLayoutReducer,
    sections: sectionReducer,
    sorts: sortReducer,
  },
});
