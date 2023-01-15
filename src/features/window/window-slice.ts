import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WindowsProps {
  window: string;
}

const initialState: WindowsProps = {
  window: "day",
};

const windowsSlice = createSlice({
  name: "sliceForWindows",

  initialState,

  reducers: {
    setWindow: (state, action: PayloadAction<string>) => {
      state.window = action.payload;
    },
  },
});

export const { setWindow } = windowsSlice.actions;

export const windowReducer = windowsSlice.reducer;
