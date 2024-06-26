import { Button } from "@mui/material";
import { ChartType } from "../../utils/types";
interface IProps {
  onButtonClick: (name: ChartType) => void;
}

const ChartButtonToggle = ({ onButtonClick }: IProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Button variant="contained" onClick={() => onButtonClick("bar")}>
        Bar
      </Button>
      <Button variant="contained" onClick={() => onButtonClick("line")}>
        Line
      </Button>
      <Button variant="contained" onClick={() => onButtonClick("area")}>
        Area
      </Button>
    </div>
  );
};

export default ChartButtonToggle;
