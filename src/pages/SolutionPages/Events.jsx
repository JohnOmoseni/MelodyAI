import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { BsArrowDownRight, BsPlayCircleFill } from "react-icons/bs";
import { tabs, eventsData } from "@constants/Events";
import { Buttons } from "@components/Buttons";
import HeroImage from "@components/HeroImage";
import HeroComponent from "@components/HeroComponent";
import events from "@assets/events.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Events = () => {
	const [selectedTab, setSelectedTab] = useState("all");

	const handleTabSwitch = (id) => {
		if (selectedTab === id) return;
		setSelectedTab(id);
	};

	const { eventData = [] } = useMemo(() => {
		return eventsData?.find((event, idx) => {
			if (event?.id === selectedTab) {
				return event?.eventData;
			}
		});
	}, [selectedTab]);

	return (
		<section>
			<div>
				<HeroComponent>
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="animate"
						viewport={{ once: true }}
						className="w-full"
					>
						<motion.h1
							variants={innerAnimate}
							className="text-white max-sm:text-center max-sm:-mt-[8%]"
						>
							Events
						</motion.h1>
					</motion.div>

					<HeroImage src={events} />
				</HeroComponent>
				<div className="w-[94%] mt-[4em] mx-auto flex justify-between gap-4">
					<ul className="grid grid-flow-col gap-4 items-center justify-between overflow-auto">
						{tabs?.map(({ id, tab }, idx) => {
							return (
								<li
									key={idx}
									className={`${
										selectedTab === id ? "text-grad" : "text-white"
									} text-sm text-shadow cursor-pointer text-center pointer leading-5 py-4 px-2 transition-colors duration-500`}
									onClick={() => handleTabSwitch(id)}
								>
									{tab}
								</li>
							);
						})}
					</ul>
					<Buttons
						title="Past Events"
						notAnimate
						className="bg-grad-100 mb-3 !py-2 text-white shadow-md font-kinn"
					/>
				</div>
			</div>

			<div className="p-section bg-[#282828]">
				{eventData?.length > 0 ? (
					<>
						<ul className="w-full flex-column my-8 gap-8 mx-auto">
							{eventData?.map(({ img, date, title, subtitle, level }, idx) => {
								return (
									<li
										key={idx}
										className="w-full flex-column sm:flex-row gap-6 sm:gap-8 p-4 border-2 border-solid border-[#323232]"
									>
										<img
											src={img}
											alt=""
											className="w-full h-[100px] sm:w-[100px] sm:h-[60px] self-center rounded-sm"
										/>

										<div className="flex-1">
											<h3 className="text-white relative">
												{date} | {title}
											</h3>
											<div className="my-2.5 w-full h-2.5 relative rounded-full overflow-hidden bg-[#111] opacity-80">
												<span
													className={`w-[${
														!isNaN(level) ? level : "60"
													}%] absolute h-full bg-grad-100 transition-all`}
												></span>
											</div>
											<p className="py-2 text-neutral-300 text-sm">
												{subtitle}
											</p>
										</div>

										<Buttons
											title="Watch Demo"
											className="bg-white text-black shadow-md"
											isIcon
											notAnimate
											Icon={BsPlayCircleFill}
										/>
									</li>
								);
							})}
						</ul>
						<Link
							to="#"
							className="w-full pt-1 text-[0.8rem] tracking-wide text-neutral-200 text-center hover:text-grad transition-colors flex-row gap-2"
						>
							View more
							<span className="">
								<BsArrowRightShort color="inherit" size={16} />
							</span>
						</Link>
					</>
				) : (
					<div className="grid place-items-center min-h-[45vh] tracking-tight">
						<h2 className="text-shadow">No upcoming events</h2>
					</div>
				)}
			</div>
		</section>
	);
};

export default Events;
