import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const existingItem = state.list.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.list.push({ ...payload, count: 1 });
      }
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter((item) => item.id !== payload.id);
    },
    modifyItem: (state, { payload }) => {
      const item = state.list.find((product) => product.id === payload.id);
      if (item) {
        item.count = payload.count;
      }
    },
  },
});

export const { addItem, removeItem, modifyItem } = CartSlice.actions;

export default CartSlice.reducer;
