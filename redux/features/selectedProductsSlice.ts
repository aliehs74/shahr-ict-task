
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IProduct } from '@/types/product';

interface ISelectedProductsState {
  data: IProduct[];
}

const initialState: ISelectedProductsState = {
  data: [],
};

export const selectedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState,
  reducers: {
    toggleProduct: (state, action: PayloadAction<IProduct>) => {
      const index = state.data.findIndex(product => product.id === action.payload.id);

      if (index === -1) {
        state.data.push(action.payload);
      } else {
        state.data.splice(index, 1);
      }
    },
  },
});

export const { toggleProduct } = selectedProductsSlice.actions;
export const selectSelectedProducts = (state: RootState) => state.selectedProducts.data;
export default selectedProductsSlice.reducer;