import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DashboardStateReducer from "./features/dashboardStateSlice";
import ChatbotStateReducer from "./features/chatbotSlice";
import UserSlice from "./features/userSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "persist-key",
	version: 1,
	storage,
	// whitelist: ["userSlice", "chatbotSlice"],
};
const reducer = combineReducers({
	userState: UserSlice,
	dashboardState: DashboardStateReducer,
	chatbotState: ChatbotStateReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
