import { createSlice } from "@reduxjs/toolkit";

interface ImagesProps {
  id: string;
  title: string;
  link: string;
  type: string;
  description: string;
}

interface ImagesState {
  images: ImagesProps[];
}

const initialState: ImagesState = {
  images: [],
};

export const imagesSlice = createSlice({
  name: "sliceForImages",

  initialState,

  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setImages } = imagesSlice.actions;

export const imagesReducer = imagesSlice.reducer;
