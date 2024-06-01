import { useSelector } from "react-redux";

function Home() {
	const { showDrawer, screenSize } = useSelector(
		(state) => state.dashboardState
	);
	const { projectId } = useSelector((state) => {
		console.log(state);
		return state.userState;
	});

	return (
		<div className="relative h-full left-0 top-0 w-full grid place-items-center overflow-hidden">
			<div className="absolute">
				<h2>Welcome Page</h2>
			</div>
		</div>
	);
}
export default Home;
