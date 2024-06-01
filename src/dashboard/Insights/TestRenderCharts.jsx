import {
  Bar,
  Pie,
  Line,
  Radar,
  Bubble,
  Chart,
  Doughnut,
} from "react-chartjs-2";
import { options as mockOption, options2 } from "@data/mockData";

const setGradientColor = (canvas, color) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0, "rgba(133,255,144,0.85");

  return gradient;
};

export function TestRenderCharts({ insightsText, data, chartOptions, idx }) {
  const options = chartOptions ? chartOptions : mockOption;

  const charts = [
    <Bar options={options} data={data} />,
    <Pie options={options} data={data} />,
    <Line options={options} data={data} />,
    <Bar options={options2} data={data} />,
    <Radar options={options} data={data} />,
  ];

  const getChartData = (canvas) => {
    let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
    if (data.datasets) {
      data.datasets.forEach((set, idx) => {
        set.backgroundColor = setGradientColor(canvas, colors[idx]);
        set.borderColor = "rgba(255, 255, 255, 0.4)";
        set.borderWidth = 1;
      });
    }
  };

  return (
    <div className="h-full">
      <p className="py-6 px-2 text-center text-neutral-400 text-shadow tracking-tight font-semibold text-shadow">
        {insightsText ? `Insights: ${insightsText}` : "Insights"}
      </p>
      <div className="" style={{ width: "100%", minHeight: "400px" }}>
        {charts[idx]}
        {/* {charts?.map((chart) => chart)} */}
      </div>
    </div>
  );
}
