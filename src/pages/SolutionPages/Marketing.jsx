import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import HeroImage from "@components/HeroImage";
import marketing from "@assets/marketing.png";
import Gain from "@components/Gain";
import HeroComponent from "@components/HeroComponent";
import { marketingData } from "@constants/MarketingData";
import { Link } from "react-router-dom";

const gains = [
	"Identify top value leads that are Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quis!",
	"Identify top value leads that are Lorem ipsum dolor sit consectetur, adipisicing elit. At, quis!",
];

function Marketing() {
	return (
		<>
			<HeroComponent>
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="animate"
					viewport={{ once: true }}
					className="w-full md:mt-[-10%]"
				>
					<motion.h1
						variants={innerAnimate}
						className="md:whitespace-nowrap text-grad"
					>
						Marketing and Sales Alert
					</motion.h1>

					<motion.p
						variants={innerAnimate}
						className="mt-6 mb-16 max-w-[60ch] leading-relaxed text-neutral-400"
					>
						With our trained AI; Predict top quality leads, rank leads,
						personalized marketing promotions and follow up on customers.
					</motion.p>

					<Link to="/contact">
						<Buttons
							title="Request Consultation"
							className="bg-grad-100 text-white shadow-md"
						/>
					</Link>
				</motion.div>

				<HeroImage src={marketing} />
			</HeroComponent>

			<div className="p-section">
				<h2 className="text-center uppercase text-grad-100">
					Solutions on marketing and sales
				</h2>

				<ul className="flex-row !flex-wrap my-[5em] gap-14 md:gap-12 w-[96%] md:px-[4%] mx-auto">
					{marketingData.map(({ id, img, title }) => {
						return (
							<li
								key={id}
								className="flex-column gap-4 overflow-hidden cursor-pointer"
							>
								<div className="rounded-sm w-full overflow-hidden">
									<img
										src={img}
										className="transition-100 hover:blur-sm hover:scale-105"
										alt=""
									/>
								</div>
								<h3 className="text-neutral-200 text-2xl font-semibold tracking-tighter text-center w-[20ch]">
									{title}
								</h3>
							</li>
						);
					})}
				</ul>
			</div>

			<Gain gains={gains} />
		</>
	);
}
export default Marketing;
