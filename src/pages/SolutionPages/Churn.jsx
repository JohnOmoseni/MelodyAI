import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import HeroImage from "@components/HeroImage";
import churn from "@assets/churn.png";
import Gain from "@components/Gain";
import HeroComponent from "@components/HeroComponent";
import { Link } from "react-router-dom";

const gains = [
	"Help to analyze business data, SMEs can make informed, data-driven decisions that drive growth.",
	"Assist SMEs maximize efficiency, foster better customer relationships, and scale without limits",
];

function Churn() {
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
						Customer Churn Alert
					</motion.h1>

					<motion.p
						variants={innerAnimate}
						className="mt-8 mb-12 max-w-[60ch] leading-relaxed text-base text-neutral-400"
					>
						Empower your business with Melody AI's Customer Churn Alert. Uncover
						insights, anticipate customer behavior, and take proactive measures
						to retain your valuable clientele.
						<br />
						<br />
						Transform data into growth strategies, ensuring your business
						thrives by minimizing churn and maximizing customer satisfaction.
						Stay ahead, stay informed and let Melody AI be your key to sustained
						success.
					</motion.p>

					<Link to="/contact">
						<Buttons
							title="Request Consultation"
							className="bg-grad-100 text-white shadow-md"
						/>
					</Link>
				</motion.div>

				<HeroImage src={churn} />
			</HeroComponent>
			<Gain gains={gains} />
		</>
	);
}
export default Churn;
