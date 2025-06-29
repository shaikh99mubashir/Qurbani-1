import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, name, price, qty, image}
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.qty += item.qty || 1;
      } else {
        state.items.push({ ...item, qty: item.qty || 1 });
      }
      state.total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      state.total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.qty = qty;
      }
      state.total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => state.cart.total;
export default cartSlice.reducer; 