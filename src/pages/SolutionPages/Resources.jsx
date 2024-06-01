import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import { tabs, library } from "@constants/Resources";
import HeroComponent from "@components/HeroComponent";
import HeroImage from "@components/HeroImage";
import img from "@assets/image4.png";
import { MdOutlineCloudDownload } from "react-icons/md";

function Resources() {
	const [email, setEmail] = useState("");
	const [selectedTab, setSelectedTab] = useState("whitepaper");

	const handleTabSwitch = (id) => {
		if (selectedTab === id) return;
		setSelectedTab(id);
	};

	const handleSubmit = () => {
		console.log("submitted");
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<>
			<HeroComponent>
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="animate"
					viewport={{ once: true }}
					className="w-full shrink-0"
				>
					<motion.h1
						variants={innerAnimate}
						className="md:whitespace-nowrap text-grad"
					>
						Resources Library
					</motion.h1>
					<motion.p
						variants={innerAnimate}
						className="my-6 text-base max-w-[60ch] text-neutral-400"
					>
						Subscribe to get update about our newsletter, e-books, demos and
						blogs
					</motion.p>

					<motion.div
						variants={innerAnimate}
						className="my-14 flex-row !justify-start gap-3.5 md:gap-5 max-sm:flex-wrap md:max-w-[80%]"
					>
						<input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email address"
							onKeyDown={onKeyDown}
							className="w-full bg-[#333] p-4 text-base placeholder:text-neutral-600 rounded-sm shadow-md"
						/>
						<Buttons
							title="Send"
							type="submit"
							notAnimate
							onClick={handleSubmit}
							className="bg-grad-100 flex-1 text-white shadow-md"
						/>
					</motion.div>
				</motion.div>

				<HeroImage src={img} altname="img" />
			</HeroComponent>

			<ul className="grid grid-flow-col gap-4 items-center justify-between w-[90%] mt-14 mx-auto overflow-auto">
				{tabs?.map(({ id, tab }, idx) => {
					return (
						<li
							key={idx}
							className={`${
								selectedTab === id ? "bg-grad-100" : "bg-[#333]"
							} text-base text-center leading-5 rounded-sm shadow-sm text-white py-2.5 px-4 w-max font-kinn text-shadow cursor-pointer`}
							onClick={() => handleTabSwitch(id)}
						>
							{tab}
						</li>
					);
				})}
			</ul>

			<div className="p-section">
				<ul className=" my-4 flex-column sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 md:px-[1%] mx-auto">
					{library.map(({ img, title, body, filePath }, idx) => {
						return (
							<li
								key={idx}
								className=" overflow-hidden w-full grid-rows-100 gap-3 shadow-100 px-4 pb-4 rounded-sm"
							>
								<div className="group rounded-sm overflow-hidden">
									<img
										src={img}
										alt=""
										className="group-hover:scale-105 transition hover:drop-shadow-md"
									/>
								</div>
								<h3 className="text-shadow text-white tracking-tight mb-6 sm:min-h-[50px]">
									{title}
								</h3>
								<a
									href={filePath}
									download
									className={`flex-row gap-2 tracking-tight font-kinn w-max px-6 py-2.5 rounded-sm text-regular max-sm:leading-4 shadow-md transition translate-y-0 active:translate-y-2 ${
										idx % 2
											? "bg-grad-300 text-white"
											: "bg-white text-neutral-700"
									}`}
								>
									Download
									<MdOutlineCloudDownload size={18} />
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
export default Resources;
