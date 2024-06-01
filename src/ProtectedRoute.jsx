import { useSelector } from "react-redux";
import Dashboard from "./dashboard/Dashboard.jsx";
import Signin from "./pages/auth/Signin.jsx";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
	const authToken = sessionStorage.getItem("melody-auth-token");
	const { token } = useSelector((state) => state.userState);
	const location = useLocation();
	const path = location.pathname;

	if (path === "/auth/sign-in") {
		return authToken !== token || !token ? (
			<Signin />
		) : (
			<Navigate to="/dashboard" />
		);
	}

	if (path.includes("dashboard")) {
		return token ? <Dashboard /> : <Navigate to="/auth/sign-in" />;
	}
	return <Navigate to="/" />;
};

export default ProtectedRoute;
