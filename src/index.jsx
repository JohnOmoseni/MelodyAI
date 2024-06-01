import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store, { persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "./index.css";
import "./utilities.css";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<App />
						<ToastContainer
							position="top-center"
							autoClose={2000}
							theme="dark"
							className=""
						/>
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
