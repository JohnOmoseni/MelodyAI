import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import Geo from "./Charts/Geo";
import BarChart from "./Charts/BarChart";
import SectionLayout from "../SectionLayout";
import { dataLine } from "../data/mockData";
import { RenderChart } from "../Insights/RenderChart";

const Card = ({ cardColor, title, value }) => (
	<div
		className="w-full rounded-md md:rounded-sm py-4 px-3 flex-column gap-4 shadow-sm bg-card-pattern bg-no-repeat bg-left opacity-95 transition hover:scale-95"
		style={{ backgroundColor: cardColor }}
	>
		<span className="text-xs capitalize text-shadow tracking-wide">
			{title}
		</span>
		<p className="text-3xl text-shadow font-semibold leading-7 truncate whitespace-nowrap">
			{value}
		</p>
	</div>
);

function Ecommerce() {
	return (
		<div className="w-full flex-column gap-[4em]">
			<div className="flex-row w-full !flex-wrap sm:dashboard-100 gap-6 !justify-center md:justify-between items-center">
				<Card cardColor="#e975a8" value="3000" title="New Visits" />
				<Card cardColor="#726cf8" value="5k+" title="Churn return" />
				<Card cardColor="#0bbf59" value="6000" title="New Customers" />
				<Card cardColor="#feb078" value="6 million" title="New Impressions" />
			</div>

			<div className="w-full flex-row !flex-wrap !items-stretch md:dashboard-200 gap-6">
				<SectionLayout>
					<RenderChart data={dataLine} chartType="area" />
				</SectionLayout>
				<SectionLayout>
					<RenderChart data={dataLine} chartType="bar" />
				</SectionLayout>
			</div>
			<div className="w-full flex-row !flex-wrap sm:grid grid-cols-2 sm:items-stretch gap-6">
				<SectionLayout>
					<RenderChart data={dataLine} chartType="radar" />
				</SectionLayout>
				<SectionLayout>
					<RenderChart data={dataLine} chartType="hbar" />
				</SectionLayout>
			</div>

			<div className="w-full flex-row !flex-wrap md:grid grid-cols-1 gap-6">
				{/* Nivo charts illustration */}
				<SectionLayout className="!min-w-[180px]">
					<LineChart />
				</SectionLayout>
				<SectionLayout className="!min-w-[180px]">
					<PieChart />
				</SectionLayout>
				<SectionLayout className="!min-w-[180px]">
					<BarChart title="Customer segmentation" />
				</SectionLayout>
				<SectionLayout className="!min-w-[180px]">
					<Geo />
				</SectionLayout>
			</div>
		</div>
	);
}
export default Ecommerce;
