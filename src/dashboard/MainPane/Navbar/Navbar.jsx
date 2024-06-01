import { MdKeyboardArrowDown } from "react-icons/md";
import {
	LightModeOutlined,
	DarkModeOutlined,
	Menu as MenuIcon,
} from "@mui/icons-material";
import { setShowDrawer } from "@redux/features/dashboardStateSlice";
import { setUser, setToken } from "@redux/features/userSlice";
import Search from "./Search";
import avatar from "/images/melody.ai.png";
import TooltipWrapper from "@components/TooltipWrapper";
import Dropdown from "@components/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavbarButton = ({
	title,
	customFunc,
	icon,
	isDot,
	dotColor = "blue",
}) => (
	<TooltipWrapper title={title}>
		<button
			type="button"
			className="icon relative text-xl rounded-full w-8 h-8 icon transition-colors hover:bg-br-light"
			onClick={customFunc}
		>
			{isDot && (
				<span
					style={{ backgroundColor: dotColor }}
					className="absolute inline-flex rounded-full h-2 w-2 right-2 top-1"
				/>
			)}
			{icon}
		</button>
	</TooltipWrapper>
);

function Navbar({ headerRef }) {
	const { showDrawer, activePane } = useSelector(
		(state) => state.dashboardState
	);
	const { user } = useSelector((state) => state.userState);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		if (user) {
			dispatch(setUser({}));
			dispatch(setToken(""));
			sessionStorage.removeItem("melody-auth-token");
			navigate("/auth/sign-in");
		}
	};

	return (
		<div
			ref={headerRef}
			className="w-full z-[999] bg-body py-4 px-4 sm:px-6 flex-row !justify-between gap-4 sm:gap-8 relative"
		>
			<div className="flex-row font-semibold gap-3">
				<NavbarButton
					title="Menu"
					customFunc={() => dispatch(setShowDrawer(!showDrawer))}
					icon={<MenuIcon />}
				/>

				<span className="leading-5 capitalize">
					{activePane ?? "Dashboard"}
				</span>
			</div>

			<Search className="hidden sm:block" />

			<div className="flex-row gap-3">
				<Link to="/dashboard/profile" className="flex-row gap-2">
					<div className="w-8 h-8 border border-solid border-br-dashboard rounded-full cursor-pointer p-1 overflow-hidden">
						<img src={avatar} alt="" className=" transition" />
					</div>
					<p className="flex-row !justify-start gap-2">
						<span className="text-gray-400 text-base">Hi,</span>{" "}
						<span className="font-bold text-xs capitalize text-gray-200 block mt-0.5 truncate">
							{user?.business_name ?? user?.firstname ?? "Unknown"}
						</span>
					</p>
				</Link>
				<Dropdown
					list={["Logout"]}
					menuBtn={() => (
						<span className="icon">
							<MdKeyboardArrowDown size={16} className="text-gray-400" />
						</span>
					)}
					onClick={handleLogout}
				/>
			</div>
		</div>
	);
}
export default Navbar;
