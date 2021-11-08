import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    resetList: (state) => {
      state.list = [];
    }
  },
});

export const { addToList, resetList } = shoppingSlice.actions;

export const selectList = (state) => state.shopping.list


export default shoppingSlice.reducer;
