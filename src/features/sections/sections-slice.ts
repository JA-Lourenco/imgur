import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SectionProps {
  section: string;
}

const initialState: SectionProps = {
  section: "hot",
};

const sectionsSlice = createSlice({
  name: "sliceForSections",

  initialState,

  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },
});

export const { setSection } = sectionsSlice.actions;

export const sectionReducer = sectionsSlice.reducer;
