import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortsProps {
  sort: string;
}

const initialState: SortsProps = {
  sort: "viral",
};

const sortsSlice = createSlice({
  name: "sliceForSorts",

  initialState,

  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortsSlice.actions;

export const sortReducer = sortsSlice.reducer;
