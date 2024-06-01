import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs.jsx";
import BlogDetails from "./pages/Blogs/BlogDetails.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Fraud from "./pages/SolutionPages/Fraud";
import Churn from "./pages/SolutionPages/Churn";
import Cost from "./pages/SolutionPages/Cost";
import Personalized from "./pages/SolutionPages/Personalized";
import Modeling from "./pages/SolutionPages/Modeling";
import Events from "./pages/SolutionPages/Events.jsx";
import Resources from "./pages/SolutionPages/Resources";
import Marketing from "./pages/SolutionPages/Marketing";
import SolutionLayout from "./pages/SolutionPages/SolutionLayout.jsx";
import MainLayout from "./components/MainLayout";
import ChatBot from "./chatbot/ChatBot.jsx";
import ReactModal from "react-modal";
import Register from "./pages/auth/Register.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactModal.setAppElement("#root");

function App() {
	return (
		<>
			<div className="wrapper">
				<Routes>
					<Route element={<MainLayout />}>
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Route>

					<Route path="/auth/sign-in" element={<ProtectedRoute />} />
					<Route path="/auth/sign-up" element={<Register />} />

					<Route element={<SolutionLayout />}>
						<Route path="/solutions">
							<Route path="*" element={<Fraud />} />
							<Route path="fraud" element={<Fraud />} />
							<Route path="modeling" element={<Modeling />} />
							<Route path="personalized" element={<Personalized />} />
							<Route path="churn" element={<Churn />} />
							<Route path="cost" element={<Cost />} />
							<Route path="marketing" element={<Marketing />} />
						</Route>

						<Route path="/resources">
							<Route path="*" element={<Resources />} />
							<Route path="events" element={<Events />} />
							<Route path="blogs">
								<Route index element={<Blogs />} />
								<Route path=":id" element={<BlogDetails />} />
							</Route>
						</Route>
					</Route>

					<Route path="/dashboard/*" element={<ProtectedRoute />} />
					{/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
					<Route path="/chatbot" element={<ChatBot />} />

					<Route path="*" element={<Home />} />
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen="false" />d
		</>
	);
}

export default App;
