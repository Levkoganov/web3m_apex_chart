import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICryptoCurrency, ICryptoCurrencyResponse } from "../../utils/types";

// Create the async thunk
export const fetchTop10Cryptocurrencies = createAsyncThunk<ICryptoCurrency[]>(
  "coingecko/fetchTop10Cryptocurrencies",
  async () => {
    const { data } = await axios.get<ICryptoCurrencyResponse[]>(
      `api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    );

    const newData = data.map(({ name, market_cap }) => ({
      name,
      market_cap,
    }));

    return newData;
  }
);
