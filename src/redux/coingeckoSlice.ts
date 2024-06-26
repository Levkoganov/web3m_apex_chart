import { createSlice } from "@reduxjs/toolkit";
import { fetchTop10Cryptocurrencies } from "../libs/api/fetchCryptourrency ";
import { ICoinGeckoState } from "../utils/types";

const initialState: ICoinGeckoState = {
  cryptocurrency: [],
  isLoading: false,
};

export const coinGeckoSlice = createSlice({
  name: "coinGecko",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTop10Cryptocurrencies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTop10Cryptocurrencies.fulfilled, (state, action) => {
      state.cryptocurrency = action.payload;
      state.isLoading = false;
    });
  },
});

export default coinGeckoSlice.reducer;
