import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "@constants/NavItems";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { menuVariant } from "@lib/animate";
import logo from "/images/melody.ai.png";

const Top = ({ headerRef, setOpenMenu }) => (
	<>
		<div
			ref={headerRef}
			className="w-full flex items-center justify-between py-[4%] px-[6%]"
		>
			<Link to="/">
				<img className="w-[80px]" src={logo} alt="Melody AI Logo" />
			</Link>
			<span
				className="cursor-pointer"
				title="close-menu"
				onClick={() => setOpenMenu(false)}
			>
				<XMarkIcon className="h-8 w-8" aria-hidden="true" />
			</span>
		</div>
	</>
);

const Dropdown = ({ setIsDropdown, selectedObj, setOpenMenu }) => {
	const dropdown = selectedObj?.dropdown;
	const title = selectedObj?.link;

	return (
		<div className="w-full h-full flex-1">
			<div className="flex items-center gap-3 p-[2%]">
				<span onClick={() => setIsDropdown(false)}>
					<BsArrowLeft size={18} color="white" />
				</span>
				<h3 className="flex-1 text-center text-shadow">{title}</h3>
			</div>
			<div className="dropdown my-3 overflow-y-auto mt-6 border border-solid border-br-light rounded-md shadow-lg">
				<ul className="w-full h-full grid items-center py-4 gap-3">
					{dropdown?.map(({ link, href, icon: Icon }, idx) => {
						return (
							<li
								key={idx}
								className="py-3 px-4 mx-2 hover:bg-[#484a4d] rounded-md hover:shadow-md transition-colors cursor-pointer"
								onClick={() => setOpenMenu(false)}
							>
								<Link to={href} className="flex-row gap-3">
									<span className="icon p-2 rounded-[50%] bg-[#383838] shadow-lg">
										<Icon className="h-5 w-5" aria-hidden="true" />
									</span>
									<p className="flex-1 text-shadow text-base leading-none">
										{link}
									</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

function Menu({ setOpenMenu }) {
	const [dropdownId, setDropdownId] = useState("solutions");
	const [isDropdown, setIsDropdown] = useState(false);
	const [selectedObj, setSelectedObj] = useState(null);
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const container = useRef(null);

	const handleTabClick = (id) => {
		const dropdown = navItems.find((item) => item.id === id);
		if (dropdown) {
			setIsDropdown(true);
			setSelectedObj(dropdown);
			dropdown && setDropdownId(id);
		}
	};

	useEffect(() => {
		const headerHeight = headerRef?.current.offsetHeight;
		const footerHeight = headerRef?.current.offsetHeight;
		const height = window.innerHeight - (headerHeight + footerHeight + 20);

		container.current.style.height = `${height}px`;
	}, []);

	return (
		<motion.div
			variants={menuVariant}
			initial="hidden"
			animate="animate"
			className="block md:hidden bg-[#222222] z-[100] w-full flex-column fixed inset-0 h-screen"
		>
			<Top headerRef={headerRef} setOpenMenu={setOpenMenu} />
			<div
				ref={container}
				className="w-full flex-1 mt-3 mb-4 px-[2%] overflow-y-auto"
			>
				{isDropdown ? (
					<Dropdown
						setOpenMenu={setOpenMenu}
						selectedObj={selectedObj}
						setIsDropdown={setIsDropdown}
					/>
				) : (
					<ul
						className="w-full h-full py-3 flex-1 flex-column !justify-between
         border border-solid border-br-light rounded-md overflow-y-auto shadow-lg"
					>
						{navItems.map(({ link, id, icon: Icon }, idx) => {
							return (
								<li
									key={idx}
									className="w-full py-3 px-4 flex-row gap-3 hover:bg-[#484a4d] rounded-md hover:shadow-md transition-colors cursor-pointer"
									onClick={() => handleTabClick(id)}
								>
									<span className="icon p-2 rounded-[50%] bg-[#383838] shadow-lg">
										<Icon className="h-5 w-5" aria-hidden="true" />
									</span>
									<p className="flex-1 text-shadow text-base leading-none">
										{link}
									</p>
									<span>
										<BsArrowRight size={18} color="white" />
									</span>
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<div
				ref={footerRef}
				className="w-full full min-h-[100px] pt-6 pb-3 flex-column gap-4 border-t-2 border-solid border-br-light"
			>
				<Link
					to="/personal"
					className="text-center px-4 py-3 w-[90%] mx-auto text-base shadow-md rounded-md bg-grad-100"
				>
					Sign up
				</Link>
				<p className="self-center my-2 px-2 text-center text-sm tracking-tight ">
					Existing customer?{" "}
					<Link
						to="/login"
						className="text-grad-200 hover:text-indigo-500 px-1 font-semibold"
					>
						Log in
					</Link>
				</p>
			</div>
		</motion.div>
	);
}

export default Menu;
