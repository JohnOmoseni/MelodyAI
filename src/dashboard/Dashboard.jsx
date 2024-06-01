import React, { Suspense, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { leftPane } from "@lib/animate";
import { Navbar } from "./MainPane";

import LeftPane from "./LeftPane";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";
import LoadingAnim from "@components/Loader/LoadingAnim";

const Upload = React.lazy(() => import("./Upload Data/Upload"));
const Insights = React.lazy(() => import("./Insights/Insights"));
const ComingSoon = React.lazy(() => import("./ComingSoon"));
const Options = React.lazy(() => import("./Options"));
const Home = React.lazy(() => import("./Home"));
const UserProfile = React.lazy(() => import("./UserProfile"));
const AllProjects = React.lazy(() => import("./Projects"));
const Project = React.lazy(() => import("./Projects/Project"));

import {
	setScreenSize,
	setShowDrawer,
} from "@redux/features/dashboardStateSlice";

function Dashboard() {
	const { showDrawer, screenSize } = useSelector((state) => {
		console.log(state);
		return state.dashboardState;
	});

	const headerRef = useRef();
	const mainRef = useRef();
	const body = document.body;

	useEffect(() => {
		if (headerRef?.current) {
			let navHeight = headerRef.current.offsetHeight;

			body.style.setProperty("--navHeight", `${navHeight + 6}px`);
		}
	}, []);

	const dispatch = useDispatch();

	useEffect(() => {
		const getScreenSize = () => {
			dispatch(setScreenSize(window?.innerWidth));
		};

		window.addEventListener("resize", getScreenSize);
		getScreenSize();

		return () => {
			window.removeEventListener("resize", getScreenSize);
		};
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			dispatch(setShowDrawer(false));
		} else {
			dispatch(setShowDrawer(true));
		}
	}, [screenSize]);

	useEffect(() => {
		if (mainRef.current) {
			let mainWidth = mainRef.current.offsetWidth;

			if (!showDrawer) {
				body.style.setProperty("--mainWidth", `${0}px`);
				body.style.setProperty("--screenSize", `${screenSize / 4}px`);
			} else {
				body.style.setProperty("--mainWidth", `${mainWidth}px`);
				body.style.setProperty("--screenSize", `${screenSize}px`);
			}
		}
	}, [[screenSize, showDrawer]]);

	return (
		<div className="dashboard h-screen w-full overflow-hidden">
			{screenSize < 648 && showDrawer ? (
				<motion.div
					variants={leftPane}
					initial="hidden"
					animate="animate"
					className="w-[320px] shadow-sm h-screen bg-black overflow-hidden fixed left-0 border-r-[1px] border-solid border-br-light z-[9999]"
				>
					<LeftPane />
				</motion.div>
			) : (
				screenSize < 648 &&
				!showDrawer && (
					<div className="w-0 overflow-hidden hidden">
						<LeftPane />
					</div>
				)
			)}

			<div
				className={`max-sm:w-0 ${
					showDrawer ? "md:w-[320px] md:block " : "md:w-0 hidden"
				} shadow-sm transition h-screen bg-black overflow-hidden fixed left-0 border-r-[1px] border-solid border-br-light z-50`}
			>
				<LeftPane />
			</div>

			<div
				ref={mainRef}
				className={`${
					showDrawer && "md:ml-[320px]"
				} h-full bg-black overflow-y-auto flex-column relative`}
			>
				<Navbar headerRef={headerRef} />
				<div className="dashboard-main w-full h-full pt-10 px-4 pb-8 md:pl-[3%] md:pr-[2%] bg-inherit rounded-sm overflow-auto max-md:relative">
					{/* <ErrorBoundary> */}
					<Suspense fallback={<LoadingAnim />}>
						<Routes>
							<Route index element={<Home />} />
							<Route path="insights">
								<Route index element={<Options />} />
								<Route path="upload" element={<Upload />} />
								<Route path="generate" element={<Insights />} />
								<Route path="projects" element={<AllProjects />} />
								<Route path="projects/:id" element={<Project />} />
							</Route>

							<Route path="profile" element={<UserProfile />} />

							<Route path="churn" element={<ComingSoon />} />
							<Route path="analysis" element={<ComingSoon />} />
							<Route path="generate_report" element={<ComingSoon />} />

							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
					{/* </ErrorBoundary> */}
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
