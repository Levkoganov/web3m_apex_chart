import { useState, useMemo } from "react";
import { ApexOptions } from "apexcharts";
import { ICryptoCurrency, ChartType, ISliderValue } from "../utils/types";

interface IProps {
  data: ICryptoCurrency[];
}

const useChart = ({ data }: IProps) => {
  // Memo calculation
  const maxMarketCap = useMemo(() => Math.max(...data.map(({ market_cap }) => market_cap)),[data]); // Calculate max value
  const minMarketCap = useMemo(() => Math.min(...data.map(({ market_cap }) => market_cap)),[data]); // Calculate min value
  const averageMarketCap = useMemo(() => data.reduce((sum, currentValue) => sum + currentValue.market_cap, 0) /data.length,[data]); // Calculate avg value

  // State variables
  const [sliderValue, setSliderValue] = useState<ISliderValue>({
    min: minMarketCap,
    max: maxMarketCap,
    current: minMarketCap,
  });

  // Initial options for ApexCharts
  const [options, setOptions] = useState<ApexOptions>({
    chart: { type: "bar", id: "bar" },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: false,
      },
    },
    dataLabels: { enabled: false },
    annotations: {
      yaxis: [
        {
          y: maxMarketCap,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Highest market cap",
          },
        },
        {
          y: minMarketCap,
          borderColor: "#FF4560",
          label: {
            borderColor: "#FF4560",
            style: {
              color: "#fff",
              background: "#FF4560",
            },
            text: "Lowest market cap",
          },
        },
        {
          y: averageMarketCap,
          borderColor: "#5145ff",
          label: {
            borderColor: "#5145ff",
            style: {
              color: "#fff",
              background: "#5145ff",
            },
            text: `Average market cap`,
          },
        },
      ],
    },
    xaxis: { categories: data.map(({ name }) => name) },
    title: {
      text: "Cryptocurrency Market cap.",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: { fontSize: "20px" },
    },
    series: [
      { name: "Market cap", data: data.map(({ market_cap }) => market_cap) },
    ],
  });

  // Event handlers
  const handleOnClickButtonChart = (name: ChartType) => { 
    setOptions((prevState: ApexOptions) => ({
      ...prevState,
      dataLabels: {
        ...prevState.dataLabels,
        enabled: name === "bar" ? false : true,
      },
      chart: {
        ...prevState.chart,
        type: name,
        id: name,
      },
    }));
  };

  const handleOnChangeSlider = (e: Event, data: number | number[]) => {
    setSliderValue((prevState) => ({
      ...prevState,
      current: data,
    }));
  };
  
  const handleOnSearchClick = () => {
    const filter = data.filter(({ market_cap }) =>
      market_cap >= sliderValue.min && market_cap <= (sliderValue.current as number)
    );

    ApexCharts.exec(options.chart?.id || "bar", "updateOptions", {
      series: [{ name: "Market cap", data: filter.map(({ market_cap }) => market_cap )}],
      xaxis: { categories: filter.map(({ name }) => name) },
    });
  };
  return {
    sliderValue,
    options,
    handleOnClickButtonChart,
    handleOnChangeSlider,
    handleOnSearchClick,
  };
};

export default useChart;
