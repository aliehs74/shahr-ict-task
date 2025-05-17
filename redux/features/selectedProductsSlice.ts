
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IProduct } from '@/types/product';

interface ISelectedProductsState {
  products: IProduct[];
}

const initialState: ISelectedProductsState = {
  products: [],
};

export const selectedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState,
  reducers: {
    toggleProduct: (state, action: PayloadAction<IProduct>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      
      if (index === -1) {
        state.products.push(action.payload);
      } else {
        state.products.splice(index, 1);
      }
    },
  },
});

export const { toggleProduct } = selectedProductsSlice.actions;
export const selectSelectedProducts = (state: RootState) => state.selectedProducts.products;
export default selectedProductsSlice.reducer;