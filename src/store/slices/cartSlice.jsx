import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartsData: [] },
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.cartsData.find(
        (item) => item.id === action.payload.id
      );

      if (existItem) {
        state.cartsData = state.cartsData.map((item) =>
          item.id == action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : { ...item }
        );
      } else {
        state.cartsData = [...state.cartsData, action.payload];
      }
    },
    deleteToCart: (state, action) => {
      state.cartsData = state.cartsData.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increment: (state, action) => {
      state.cartsData = state.cartsData.map((item) =>
        item.id == action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );
    },
    decrement: (state, action) => {
      state.cartsData = state.cartsData.map((item) =>
        item.id == action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, deleteToCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice;
