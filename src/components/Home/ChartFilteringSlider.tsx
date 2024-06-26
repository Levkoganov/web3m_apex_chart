import { Box, Slider, Button } from "@mui/material";
import { ISliderValue } from "../../utils/types";

interface IProps {
  onSliderChange: (e: Event, data: number | number[]) => void;
  onSearchClick: () => void;
  sliderValue: ISliderValue;
}

const ChartFilteringSlider = ({
  onSearchClick,
  onSliderChange,
  sliderValue,
}: IProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Box sx={{ width: "50%" }}>
        <h3 style={{ textAlign: "center" }}>Filter by market cap range:</h3>
        <Slider
          onChange={onSliderChange}
          value={sliderValue.current}
          min={sliderValue.min}
          max={sliderValue.max}
          valueLabelDisplay="auto"
          marks={[
            { value: sliderValue.min, label: "MIN" },
            { value: sliderValue.max, label: "MAX" },
          ]}
        />
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          onClick={onSearchClick}
        >
          Search
        </Button>
      </Box>
    </div>
  );
};

export default ChartFilteringSlider;
