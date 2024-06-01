import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { CiBank } from "react-icons/ci";

export const sidebarLinks = [
	{
		icon: RxDashboard,
		name: "Insight Generator",
		href: "/dashboard/insights",
		tag: "insights",
	},
	{
		icon: RxSketchLogo,
		name: "Churn Prediction",
		href: "/dashboard/churn",
		tag: "churn",
	},
	{
		icon: RxSketchLogo,
		name: "Generate Technical Report",
		href: "/dashboard/generate_report",
		tag: "Generate report",
	},
	{
		icon: CiBank,
		name: "Bank Statement Analysis",
		href: "/dashboard/analysis",
		tag: "analysis",
	},
];

export const overviewData = [
	{
		title: "New visits",
		value: 3000,
		cardColor: "aqua",
		percentage: "-4%",
		valColor: "green-600",
	},
];
