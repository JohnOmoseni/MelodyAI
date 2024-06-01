import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import Gain from "@components/Gain";
import HeroImage from "@components/HeroImage";
import personalize from "@assets/personalize.png";
import HeroComponent from "@components/HeroComponent";
import { Link } from "react-router-dom";

const listitems = [
	"Increased growth",
	"Generate paying customers through personalized promotions",
	"Customized promotion according to your unique requirements",
	"Customized promotion",
];

function Personalized() {
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
						className=" md:whitespace-nowrap text-grad"
					>
						Personalized model
					</motion.h1>
					<motion.ul
						variants={innerAnimate}
						className="flex-column mt-8 mb-12 gap-2 mx-10"
					>
						{listitems.map((text, idx) => {
							return (
								<li
									key={idx}
									className="text-neutral-400 text-shadow text-base sh list-disc"
								>
									{text}
								</li>
							);
						})}
					</motion.ul>

					<Link to="/contact">
						<Buttons
							title="Request Consultation"
							className="bg-grad-100  text-white shadow-md"
						/>
					</Link>
				</motion.div>

				<HeroImage src={personalize} />
			</HeroComponent>

			<Gain />
		</>
	);
}
export default Personalized;
