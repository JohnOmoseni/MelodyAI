import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  isLoading: false,
  isError: false,
};

const appStateSlice = createSlice({
  name: "appState",
  initialState: initialAppState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export default appStateSlice.reducer;
export const { setIsLoading, setIsError } = appStateSlice.actions;
