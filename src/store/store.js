import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categorySlice from "./slices/categorySlice";
import searchSlice from "./slices/searchSlice";

const Store=configureStore({
  reducer:{
    cart:cartSlice.reducer,
    category: categorySlice.reducer,
    search:searchSlice.reducer
  }
})

export default Store