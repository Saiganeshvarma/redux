import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToCart, removeCart } = cartReducer.actions;
export default cartReducer.reducer;
