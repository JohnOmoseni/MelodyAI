import { FaExpandArrowsAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { setUser, setToken } from "@redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { IconBg } from "../../dashboard/IconBg";

import Dropdown from "@components/Dropdown";
import { MdOutlineArrowDropDown } from "react-icons/md";

function ChatHeading({ popup }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, token } = useSelector((state) => state.userState);
	const {
		project: { projectId },
	} = useSelector((state) => state.dashboardState);

	const handleLogout = () => {
		if (user) {
			dispatch(setUser({}));
			dispatch(setToken(""));
			sessionStorage.removeItem("melody-auth-token");
			navigate("/auth/sign-in");
		}
	};

	return (
		<div className="w-full relative z-40 py-3.5 px-4 md:py-4.5 md:px-5 flex-row !justify-between animated-bg bg-opacity-50 shadow-100 border-b border-solid border-neutral-700">
			<div className="flex-row gap-3">
				<div className="relative flex-1 w-[40px] max-w-[40px] h-[40px] rounded-[50%] border border-solid border-br-light filter">
					<img
						src={faker.image.avatar()}
						alt=""
						className="group-hover:scale-105 transition"
					/>
					<div
						className="absolute -bottom-[1px] right-0 w-[11px] h-[11px] rounded-[50%] shadow-sm border border-solid border-neutral-800 bg-green-500
          "
					>
						<span className="absolute inset-[-4px] bg-green-700 bg-opacity-40 rounded-full animate-pulse"></span>
					</div>
				</div>

				<h4 className="text-shadow text-lg overflow-hidden mt-[1px] font-kinn">
					Cadence
					<span className="text-neutral-300 !block text-xs mt-[-3px]">
						online
					</span>
				</h4>
			</div>

			{popup ? (
				<IconBg className="flex-row">
					<Link to={`/chatbot?id=${projectId}`} state={{ token }}>
						<FaExpandArrowsAlt size={16} className="text-white" />
					</Link>
				</IconBg>
			) : (
				<div className="flex-row !justify-between gap-4">
					<Dropdown
						list={["Log out"]}
						onClick={handleLogout}
						menuBtn={() => (
							<MdOutlineArrowDropDown
								size={18}
								className="icon cursor-pointer"
								color="#333"
							/>
						)}
					/>
				</div>
			)}
		</div>
	);
}
export default ChatHeading;
