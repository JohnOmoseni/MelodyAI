import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import { Link } from "react-router-dom";
import fraud from "@assets/Group 8677.png";
import HeroImage from "@components/HeroImage";
import HeroComponent from "@components/HeroComponent";
import { modeling, benefits } from "@constants/Modeling";

function Modeling() {
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
					<motion.h1 variants={innerAnimate} className="md:whitespace-nowrap">
						Predictive{" "}
						<span className="font-bold text-grad font-kinn">Modeling</span>
					</motion.h1>
					<motion.p
						variants={innerAnimate}
						className="my-6 text-sm max-w-[50ch] text-neutral-400"
					>
						Predict Quality Leads effortlessly with Melody AI. <br /> Our smart
						analytics sifts through data, identifying your most promising leads.
						Say goodbye to guesswork and hello to precision in your marketing
						efforts. Maximize your ROI by focusing on the leads that matter.
						Melody AI — guiding your business towards a future of strategic
						growth.
						<br />
						<br />
						Unleash the power of Predictive Modeling with Melody AI. Anticipate
						trends, make informed decisions, and chart a course for success.
						Transform your business strategy with data-driven foresight.
					</motion.p>
					<motion.em
						variants={innerAnimate}
						className="my-4 mb-12 italics block text-sm text-neutral-400"
					>
						Melody AI — your compass in the ever-evolving landscape of
						opportunity.
					</motion.em>
					<motion.div
						variants={innerAnimate}
						className="flex-row !justify-start gap-5 max-sm:gap-3.5 max-sm:flex-wrap"
					>
						<Link to="/contact">
							<Buttons
								title="Request Consultation"
								className="bg-grad-100 text-white shadow-md"
							/>
						</Link>
					</motion.div>
				</motion.div>

				<HeroImage src={fraud} altname="fraud" />
			</HeroComponent>

			<div className="p-section">
				<h2 className="text-center uppercase text-grad">Use cases</h2>
				<ul className="grid-cols-300 my-[4em] gap-4 w-[96%] md:px-[4%] mx-auto">
					{modeling.map(({ id, img, title, info }) => {
						return (
							<li
								key={id}
								className="rounded-sm shadow-sm bg-grad-300 relative z-10 flex-column gap-4 py-4 px-5"
							>
								<div className="absolute inset-[2px] -z-10 bg-[#222]"></div>
								<div className="w-8 h-8 mx-auto">
									<img src={img} alt="" />
								</div>
								<h4 className="text-white w-full capitalize font-semibold tracking-tight text-center">
									{title}
								</h4>
								<p className="text-neutral-400 text-sm pb-3">{info}</p>

								<Link
									to="#"
									className="flex self-end pt-1 text-[0.8rem] tracking-wide text-neutral-200"
								>
									Learn More
								</Link>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="p-section bg-[#282828]">
				<h2 className="text-white text-center capitalize">Benefits</h2>
				<ul className="grid-cols-300 items-center my-8 gap-8 w-[94%] mx-auto">
					{benefits.map(({ title, subtext }, idx) => {
						return (
							<li key={idx} className="flex-column min-w-[40%] gap-3">
								<h3 className="text-white font-semibold">{title}</h3>
								<p className="text-neutral-300  text-sm max-w-[50ch]">
									{subtext}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
export default Modeling;
