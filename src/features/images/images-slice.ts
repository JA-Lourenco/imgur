import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImagesProps {
  id: string;
  title: string;
  link: string;
  type: string;
}

export interface ImagesState {
  imagesData: ImagesProps[];
}

const initialState: ImagesState = {
  imagesData: [],
};

const imagesSlice = createSlice({
  name: "sliceForImages",

  initialState,

  reducers: {
    setImages: (state, action: PayloadAction<Array<ImagesProps>>) => {
      state.imagesData = action.payload;
    },
  },
});

export const { setImages } = imagesSlice.actions;

export const imagesReducer = imagesSlice.reducer;
