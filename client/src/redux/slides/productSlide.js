import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      // state.search = action.payload.charAt(0).toLowerCase();
      state.search = action.payload.toLowerCase();
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchProduct } = productSlide.actions;

export default productSlide.reducer;
