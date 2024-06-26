import ReactApexChart from "react-apexcharts";
import ChartButtonToggle from "./ChartButtonToggle";
import ChartFilteringSlider from "./ChartFilteringSlider";
import { ICryptoCurrency } from "../../utils/types";
import useChart from "../../hooks/useChart";

interface IProps {
  data: ICryptoCurrency[];
}

const Chart = ({ data }: IProps) => {
  const {
    sliderValue,
    options,
    handleOnClickButtonChart,
    handleOnChangeSlider,
    handleOnSearchClick,
  } = useChart({ data });

  return (
    <div>
      <ReactApexChart
        key={options.chart?.type}
        options={options}
        series={options.series}
        type={options.chart?.type}
        height={500}
        width="100%"
      />
      <ChartButtonToggle onButtonClick={handleOnClickButtonChart} />
      <ChartFilteringSlider
        onSliderChange={handleOnChangeSlider}
        onSearchClick={handleOnSearchClick}
        sliderValue={sliderValue}
      />
    </div>
  );
};

export default Chart;
