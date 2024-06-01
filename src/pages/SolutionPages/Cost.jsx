import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import HeroImage from "@components/HeroImage";
import cost from "@assets/cost.png";
import Gain from "@components/Gain";
import HeroComponent from "@components/HeroComponent";
import { Link } from "react-router-dom";

const gains = [
	"Identify top value leads that are Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quis!",
	"Identify top value leads that are Lorem ipsum dolor sit consectetur, adipisicing elit. At, quis!",
];

const listitems = [
	"It will help maximize business value",
	"Generate paying customers through personalized promotions",
	"Underutilization",
];

function Cost() {
	return (
		<>
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
						className="md:whitespace-nowrap text-grad-200"
					>
						Cost optimization
					</motion.h1>

					<motion.p
						variants={innerAnimate}
						className="mt-8 max-w-[50ch] leading-relaxed text-neutral-300"
					>
						With all the value of services which will be offered by our AI in
						marketing and sales
					</motion.p>

					<motion.ul
						variants={innerAnimate}
						className="flex-column mt-4 mb-8 gap-1 mx-8"
					>
						{listitems.map((text, idx) => {
							return (
								<li key={idx} className="text-neutral-400 text-base list-disc">
									{text}
								</li>
							);
						})}
					</motion.ul>

					<Link to="/contact">
						<Buttons
							title="Request Consultation"
							className="bg-grad-100 my-4 text-white shadow-md"
						/>
					</Link>
				</motion.div>

				<HeroImage src={cost} />
			</HeroComponent>

			<Gain gains={gains} />
		</>
	);
}
export default Cost;
