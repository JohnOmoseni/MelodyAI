import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showSidebar: true,
	chatLog: [],
	responses: [
		{ type: "msg", incoming: true, message: "Hey there!!" },
		{ type: "msg", incoming: true, message: "msg2 there!!" },
		{ type: "msg", incoming: true, message: "msg3 there!!" },
		{ type: "msg", incoming: true, message: "msg4 there!!" },
		{ type: "msg", incoming: true, message: "msg4 there!!" },
		{ type: "msg", incoming: true, message: "msg4 there!!" },
		{ type: "msg", incoming: true, message: "msg4 there!!" },
		{ type: "msg", incoming: true, message: "msg4 there!!" },
		{ type: "msg", incoming: true, message: "msg4 there!!" },
	],
	isLoading: false,
	screenSize: undefined,
};

const chatbotStateSlice = createSlice({
	name: "chatbotSlice",
	initialState: initialState,
	reducers: {
		setShowSidebar: (state, action) => {
			state.showSidebar = action.payload;
		},
		setScreenSize: (state, { payload }) => {
			state.screenSize = payload;
		},
		setChatLog: (state, { payload }) => {
			state.chatLog = payload;
		},
		setIsLoading: (state, { payload }) => {
			if (Array.isArray(payload)) {
				state.isLoading = payload;
			}
		},
	},
});

export default chatbotStateSlice.reducer;
export const { setShowSidebar, setScreenSize, setChatLog, setIsLoading } =
	chatbotStateSlice.actions;
