import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { category: "All" },
  reducers: {
    setCategoryData: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategoryData } = categorySlice.actions;

export default categorySlice;
