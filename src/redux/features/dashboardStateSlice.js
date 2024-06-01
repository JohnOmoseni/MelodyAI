import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showDrawer: true,
	activePane: "dashboard",
	screenSize: undefined,
	project: {
		projectId: "",
		projectName: "",
		userId: "",
	},
	projects: [],
	charts: [
		{
			title: "Plot of product size against standard cost",
			plot_type: "bar",
			x_axis: ["large", "medium", "small"],
			y_axis: [1809135.94, 4573257.42, 2693109.39],
			insight:
				"From the plot, 'medium' stands out with the highest standard cost value of 4573257.42.",
		},
		{
			title: "Distribution of product size in the dataset",
			plot_type: "bar",
			x_axis: ["medium", "large", "small"],
			y_axis: [10663, 3252, 2364],
			insight:
				"'large' element in the plot has outperformed others, boasting the highest Count value of 4573257.42.",
		},
		{
			title: "Plot of Year against standard cost",
			plot_type: "bar",
			x_axis: [2017],
			y_axis: [9075502.75],
		},
		{
			title: "Plot of Month against standard cost",
			plot_type: "bar",
			x_axis: [
				"April",
				"August",
				"December",
				"February",
				"January",
				"July",
				"June",
				"March",
				"May",
				"November",
				"October",
				"September",
			],
			y_axis: [
				778635.84, 780807.86, 744031.17, 760039.75, 750893.31, 753164.36,
				714053.62, 752466.72, 802301.83, 716791.15, 801473.89, 720843.25,
			],
		},
		{
			title: "Plot of Day against standard cost",
			plot_type: "bar",
			x_axis: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
			],
			y_axis: [
				290300.61, 304057.15, 294975.46, 290944.91, 288721.5, 298934.51,
				288213.01, 299896.08, 310178.84, 294376.94, 302612.54, 274776.25,
				310391.69, 323685.06, 331935.91, 307970.26, 304655, 329068.82, 306694.6,
				317093.53, 287833.62, 328541.68, 287914.65, 286977.17, 291499.17,
				281074.75, 291724.46, 301890.25, 249200.5, 261753.55, 137610.28,
			],
		},
	],
	selectedCollection: [],
	// selectedCollection: [
	//   "transaction id",
	//   "product id",
	//   "customer id",
	//   "transaction date",
	//   "online order",
	//   "order status",
	//   "brand",
	//   "product line",
	//   "product class",
	//   "product size",
	//   "list price",
	//   "standard cost",
	//   "product first sold date",
	//   "Profit",
	//   "Profit Margin",
	//   "first name",
	//   "last name",
	//   "gender",
	//   "past 3 years bike related purchases",
	//   "DOB",
	//   "Age",
	//   "job title",
	//   "job industry category",
	//   "wealth segment",
	//   "deceased indicator",
	//   "owns car",
	//   "tenure",
	//   "address",
	//   "postcode",
	//   "state",
	// ],
	// {
	//     "success": true,
	//     "message": "Project dasboard created successfully",
	//     "project": {
	//         "filepath": "projects/ad99a85e-120b-4522-b129-06dfcc353eea/9275464d-a74a-4a2f-8914-2d131eee7b31/Combined KPMG Data.csv",
	//         "columns": [
	//             "transaction id",
	//             "product id",
	//             "customer id",
	//             "transaction date",
	//             "online order",
	//             "order status",
	//             "brand",
	//             "product line",
	//             "product class",
	//             "product size",
	//             "list price",
	//             "standard cost",
	//             "product first sold date",
	//             "Profit",
	//             "Profit Margin",
	//             "first name",
	//             "last name",
	//             "gender",
	//             "past 3 years bike related purchases",
	//             "DOB",
	//             "Age",
	//             "job title",
	//             "job industry category",
	//             "wealth segment",
	//             "deceased indicator",
	//             "owns car",
	//             "tenure",
	//             "address",
	//             "postcode",
	//             "state"
	//         ],
	//         "created_at": "2024-01-04T15:13:17.252864",
	//         "project_name": "ojaaay test project",
	//         "user_id": "ad99a85e-120b-4522-b129-06dfcc353eea",
	//         "id": "9275464d-a74a-4a2f-8914-2d131eee7b31",
	//         "updated_at": "2024-01-04T15:13:17.252286"
	//     },
	//     "columns": [
	//         "transaction id",
	//         "product id",
	//         "customer id",
	//         "transaction date",
	//         "online order",
	//         "order status",
	//         "brand",
	//         "product line",
	//         "product class",
	//         "product size",
	//         "list price",
	//         "standard cost",
	//         "product first sold date",
	//         "Profit",
	//         "Profit Margin",
	//         "first name",
	//         "last name",
	//         "gender",
	//         "past 3 years bike related purchases",
	//         "DOB",
	//         "Age",
	//         "job title",
	//         "job industry category",
	//         "wealth segment",
	//         "deceased indicator",
	//         "owns car",
	//         "tenure",
	//         "address",
	//         "postcode",
	//         "state"
	//     ]
	// }
};

// {

//     "success": true,
//     "message": "Project insights genrated successfully",
//     "data": [
//         {
//             "title": "Plot of product size against standard cost",
//             "plot_type": "bar",
//             "x_axis": [
//                 "large",
//                 "medium",
//                 "small"
//             ],
//             "y_axis": [
//                 1809135.94,
//                 4573257.42,
//                 2693109.39
//             ],
//             "insight": "From the plot, 'medium' stands out with the highest standard cost value of 4573257.42."
//         },
//         {
//             "title": "Ditribution of product size in the dataset",
//             "plot_type": "bar",
//             "x_axis": [
//                 "medium",
//                 "large",
//                 "small"
//             ],
//             "y_axis": [
//                 10663,
//                 3252,
//                 2364
//             ],
//             "insight": "'large' element in the plot has outperformed others, boasting the highest Count value of 4573257.42."
//         },
//         {
//             "title": "Plot of Year against standard cost",
//             "plot_type": "bar",
//             "x_axis": [
//                 2017
//             ],
//             "y_axis": [
//                 9075502.75
//             ]
//         },
//         {
//             "title": "Plot of Month against standard cost",
//             "plot_type": "bar",
//             "x_axis": [
//                 "April",
//                 "August",
//                 "December",
//                 "February",
//                 "January",
//                 "July",
//                 "June",
//                 "March",
//                 "May",
//                 "November",
//                 "October",
//                 "September"
//             ],
//             "y_axis": [
//                 778635.84,
//                 780807.86,
//                 744031.17,
//                 760039.75,
//                 750893.31,
//                 753164.36,
//                 714053.62,
//                 752466.72,
//                 802301.83,
//                 716791.15,
//                 801473.89,
//                 720843.25
//             ]
//         },
//         {
//             "title": "Plot of Day against standard cost",
//             "plot_type": "bar",
//             "x_axis": [
//                 1,
//                 2,
//                 3,
//                 4,
//                 5,
//                 6,
//                 7,
//                 8,
//                 9,
//                 10,
//                 11,
//                 12,
//                 13,
//                 14,
//                 15,
//                 16,
//                 17,
//                 18,
//                 19,
//                 20,
//                 21,
//                 22,
//                 23,
//                 24,
//                 25,
//                 26,
//                 27,
//                 28,
//                 29,
//                 30,
//                 31
//             ],
//             "y_axis": [
//                 290300.61,
//                 304057.15,
//                 294975.46,
//                 290944.91,
//                 288721.5,
//                 298934.51,
//                 288213.01,
//                 299896.08,
//                 310178.84,
//                 294376.94,
//                 302612.54,
//                 274776.25,
//                 310391.69,
//                 323685.06,
//                 331935.91,
//                 307970.26,
//                 304655,
//                 329068.82,
//                 306694.6,
//                 317093.53,
//                 287833.62,
//                 328541.68,
//                 287914.65,
//                 286977.17,
//                 291499.17,
//                 281074.75,
//                 291724.46,
//                 301890.25,
//                 249200.5,
//                 261753.55,
//                 137610.28
//             ]
//         }
//     ]
// }
const dashboardStateSlice = createSlice({
	name: "dashboardState",
	initialState: initialState,
	reducers: {
		setShowDrawer: (state, action) => {
			state.showDrawer = action.payload;
		},
		setActiveNavItem: (state, { payload: id }) => {
			state.navItem = { ...state.navItem, [id]: !state[id] };
		},
		setScreenSize: (state, { payload }) => {
			state.screenSize = payload;
		},
		setActivePane: (state, { payload }) => {
			state.activePane = payload;
		},
		setCharts: (state, action) => {
			state.charts = action.payload;
		},
		setSelectedCollection: (state, action) => {
			state.selectedCollection = action.payload;
		},
		setProject: (state, { payload }) => {
			state.project = { ...state.project, ...payload };
		},
		setAllProjects: (state, action) => {
			state.projects = action.payload;
		},
	},
});

export default dashboardStateSlice.reducer;
export const {
	setShowDrawer,
	setActivePane,
	setActiveNavItem,
	setScreenSize,
	setCharts,
	setSelectedCollection,
	setProject,
	setAllProjects,
} = dashboardStateSlice.actions;
