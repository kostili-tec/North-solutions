import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISearch } from '../shared/models/types';

const initialState: ISearch = {
  first: 10, 
  searchTerm: '', 
  after: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<ISearch>) => ({ ...state, ...action.payload }),
    /* setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFirst: (state, action: PayloadAction<number>) => {
      state.first = action.payload;
    },
    setAfter: (state, action: PayloadAction<string>) => {
      state.after = action.payload;
    }, */
  },

})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;