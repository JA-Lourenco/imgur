import { createSlice } from "@reduxjs/toolkit";

interface GridLayoutProps {
  changeGrid: boolean;
}

const initialState: GridLayoutProps = {
  changeGrid: true,
};

const gridLayoutSlice = createSlice({
  name: "sliceForGridLayout",

  initialState,

  reducers: {
    setGridLayout: (state) => {
      return {
        ...state,
        changeGrid: !state.changeGrid,
      };
    },
  },
});

export const { setGridLayout } = gridLayoutSlice.actions;

export const gridLayoutReducer = gridLayoutSlice.reducer;
