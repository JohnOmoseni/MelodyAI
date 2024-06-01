import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	user: {
		id: "a25308f3-9b0b-43f6-a013-1674670474e6",
		business_name: "johnobiVentures",
		firstname: "john",
		lastname: "obi",
		email: "johnobi@example.com",
		is_active: true,
		is_verified: false,
		is_superuser: false,
		credit_balance: 0,
		created_at: "2023-12-27T20:43:10.086583",
		updated_at: "2023-12-27T20:43:10.083720",
	},
	token: "",
};

const userSlice = createSlice({
	name: "userSlice",
	initialState: initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setUser: (state, { payload }) => {
			state.user = payload;
			state.isLoggedIn = payload ? true : false;
		},
	},
});

export default userSlice.reducer;
export const { setUser, setToken } = userSlice.actions;
