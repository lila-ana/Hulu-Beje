import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const logoutSlice = createSlice({
  name: 'logout',
  initialState: null, 
  reducers: {
    purgeData: (state) => {
      return null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      return null;
    });
  },
});

export const { purgeData } = logoutSlice.actions;
export default logoutSlice.reducer;
