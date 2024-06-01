import { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { leftPane } from "@lib/animate";
import { setScreenSize, setShowSidebar } from "@redux/features/chatbotSlice";
import ChatHeading from "./MainPane/ChatHeading";
import InputBar from "./MainPane/ChatInput";
import ChatMain from "./MainPane/ChatMain";

function ChatBot() {
	const { showSidebar, screenSize } = useSelector(
		(state) => state.chatbotState
	);
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
		if (screenSize <= 640) {
			dispatch(setShowSidebar(false));
		} else {
			dispatch(setShowSidebar(true));
		}
	}, [screenSize]);

	return (
		<div className="screen-height w-full overflow-hidden">
			{showSidebar ? (
				<motion.div
					variants={leftPane}
					initial="hidden"
					animate="animate"
					className="w-[70px] shadow-sm screen-height bg-body backdrop-blur-md bg-opacity-70 overflow-hidden fixed top-0 left-0 border-r-[1px] border-solid border-neutral-800 z-50"
				>
					<Sidebar />
				</motion.div>
			) : (
				<div className="relative hidden overflow-hidden">
					<Sidebar />
				</div>
			)}
			<div
				className={`${
					showSidebar && "sm:ml-[70px]"
				} h-full overflow-hidden bg-[#282828] flex-column`}
			>
				<ChatHeading />
				<div className="w-full relative flex-1 pt-8 px-4 pb-6 md:px-[3%] md:pl-[2%] max-sm:mb-2.5 overflow-x-hidden overflow-y-auto">
					<ChatMain />
				</div>
				<InputBar />
			</div>
		</div>
	);
}
export default ChatBot;
