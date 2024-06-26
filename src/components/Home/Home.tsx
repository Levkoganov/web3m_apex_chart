import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTop10Cryptocurrencies } from "../../libs/api/fetchCryptourrency ";
import { AppDispatch, RootState } from "../../redux/store";

import Chart from "./Chart";

const Home = () => {
  const { cryptocurrency, isLoading } = useSelector(
    (state: RootState) => state.coingecko
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      await dispatch(fetchTop10Cryptocurrencies());
    })();
  }, [dispatch]);

  return (
    <div>{isLoading ? "...loading" : <Chart data={cryptocurrency} />}</div>
  );
};

export default Home;
