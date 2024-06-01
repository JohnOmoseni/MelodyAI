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

export function RenderChart({
	insightsText,
	title,
	data,
	chartType,
	chartOptions,
}) {
	const options = chartOptions ? chartOptions : mockOption;
	let ChartComponent;

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

	switch (chartType) {
		case "area":
			ChartComponent = <Line options={options} data={data} />;
			break;
		case "line":
			ChartComponent = <Line options={options} data={data} />;
			break;
		case "bar":
			ChartComponent = <Bar options={options} data={data} />;
			break;
		case "hbar":
			ChartComponent = <Bar options={options2} data={data} />;
			break;
		case "radar":
			ChartComponent = <Radar options={options} data={data} />;
			break;
		case "bubble":
			ChartComponent = <Bubble options={options} data={data} />;
			break;
		case "pie":
			ChartComponent = <Pie data={data} />;
			break;
		case "doughnut":
			ChartComponent = <Doughnut data={data} options={options} />;
			break;

		default:
			ChartComponent = <Line options={options} data={data} />;
	}

	return (
		<div className="h-full">
			<div className="py-6 px-2">
				<h3 className="text-center text-lg">{title}</h3>
				<p className="px-3 text-center text-neutral-400 text-sm tracking-tight text-shadow">
					{insightsText ? `Insights: ${insightsText}` : "Insights"}
				</p>
			</div>
			<div className="" style={{ width: "100%", minHeight: "400px" }}>
				{ChartComponent}
			</div>
		</div>
	);
}
