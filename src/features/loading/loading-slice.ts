import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoadingProps {
  loading: boolean;
}

const initialState: LoadingProps = {
  loading: true,
};

const loadingSlice = createSlice({
  name: "sliceForLoading",

  initialState,

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;
