import HeatMap from "react-heatmap-grid";
import { data as importedData } from "../content";

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = importedData.map((element) => `${element.day.slice(-2)}th`);
console.log(yLabels);

const outputData = importedData
  .map((element) => element.hours)
  .map((innerArray) => innerArray.map((obj) => obj.record_count));

const cellStyle = (background, value, min, max, data, x, y) => {
  let cellColor = "#343a40";
  let fontSize = "11px";
  let opacity = 1;

  if (value > 0) {
    cellColor = `#40916c`;
    fontSize = "16px";
    opacity = `${(value / 1000) * 100}%`;
  }

  return {
    background: cellColor,
    fontSize: fontSize,
    opacity: opacity,
  };
};

const Table = () => {
  return (
    <div className="text-md">
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        data={outputData}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={40}
        background="grey"
        cellStyle={cellStyle}
        squares={true}
        height={25}
      />
    </div>
  );
};

export default Table;
