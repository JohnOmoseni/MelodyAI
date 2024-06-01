import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { sidebarLinks } from "@data/sidebarLinks";
import {
	setShowDrawer,
	setActivePane,
} from "@redux/features/dashboardStateSlice";
import { Buttons } from "@components/Buttons";
import logo from "/images/melody.ai.png";
import Search from "./MainPane/Navbar/Search";

const LinkRow = ({ href, tag, icon: Icon, name, onClick }) => {
	const { pathname } = useLocation();
	const isActive = pathname.includes(tag);

	const activeLink =
		"w-full flex-row gap-3 !justify-start py-4 px-3 hover:bg-[#333333] transition-colors border-br-dashboard rounded-lg text-grad font-semibold text-[1rem] text-shadow";
	const normalLink =
		"w-full flex-row gap-3 !justify-start py-4 px-3 hover:bg-[#333333] transition-colors border-br-dashboard rounded-lg text-white text-[1rem]";

	return (
		<NavLink
			to={href}
			className={({ isActive }) => (isActive ? activeLink : normalLink)}
			onClick={onClick}
		>
			<span className="p-1 bg-neutral-800 -mt-[1px] rounded-md">
				<Icon size={18} />
			</span>

			<span className="text-red-50">{name}</span>
		</NavLink>
	);
};

function LeftPane() {
	const { showDrawer, screenSize } = useSelector(
		(state) => state.dashboardState
	);
	const dispatch = useDispatch();

	const handleCloseLeftPane = ({ tag }) => {
		if (showDrawer && screenSize <= 900) {
			dispatch(setShowDrawer(false));
		}
		dispatch(setActivePane(tag));
	};

	return (
		<motion.div className="h-full">
			<div className="w-full max-md:pl-4 md:grid md:place-items-center">
				<Link
					to="/dashboard"
					className="w-[120px] my-6"
					onClick={handleCloseLeftPane}
				>
					<img src={logo} alt="Melody AI" />
				</Link>
				<button
					type="button"
					onClick={handleCloseLeftPane}
					className="text-2xl absolute top-2 right-2 rounded-full p-3 hover:bg-br-light mt-4 md:hidden"
				>
					<MdOutlineCancel />
				</button>
			</div>
			{screenSize < 640 && (
				<div className="mx-4 my-8">
					<Search classNam="" />
				</div>
			)}

			<div className="flex-column mx-4 gap-4 mt-8 md:mt-[15%]">
				{sidebarLinks.map((link, idx) => (
					<LinkRow
						{...link}
						key={idx}
						onClick={() => handleCloseLeftPane(link)}
					/>
				))}
			</div>
		</motion.div>
	);
}
export default LeftPane;
