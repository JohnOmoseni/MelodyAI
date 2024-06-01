import { motion } from "framer-motion";
import { innerAnimate, container } from "@lib/animate";
import { BsPlayCircleFill } from "react-icons/bs";
import { Buttons } from "@components/Buttons";
import { Link } from "react-router-dom";
import fraud from "@assets/Group 8677.png";
import HeroImage from "@components/HeroImage";
import HeroComponent from "@components/HeroComponent";
import { fraudData, fraudBenefits } from "@constants/FraudData";

function Fraud() {
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
						Fraud and{" "}
						<span className="font-bold text-grad font-kinn">security</span>
					</motion.h1>
					<motion.p
						variants={innerAnimate}
						className="mt-8 mb-14 text-sm max-w-[50ch] text-neutral-400"
					>
						Advanced fraud detection and prevention as a cutting-edge Security
						for Your Business.
						<br />
						<br />
						We Power Security with Deep Learning systems which is a proven
						approach to fraud detection and prevention for the safety of your
						organization.
					</motion.p>
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

						{/* <Buttons
              title="Watch Demo"
              className="bg-white text-black shadow-md"
              isIcon
              Icon={BsPlayCircleFill}
            /> */}
					</motion.div>
				</motion.div>

				<HeroImage src={fraud} altname="fraud" />
			</HeroComponent>

			<div className="p-section">
				<h2 className="text-center uppercase text-grad">Use cases</h2>
				<ul className="grid-cols-300 my-[4em] gap-6 w-[96%] md:px-[4%] mx-auto">
					{fraudData.map(({ id, img, title, info }) => {
						return (
							<li
								key={id}
								className="rounded-sm shadow-md bg-grad-00 relative z-10 flex-column gap-4 py-4 px-5"
							>
								<div className="absolute inset-[2px] -z-10 bg-[#222]"></div>
								<div className="w-8 h-8 mx-auto">
									<img src={img} />
								</div>
								<h4 className="text-white w-full capitalize font-semibold tracking-tight text-center">
									{title}
								</h4>
								<p className="text-neutral-400 text-sm pb-3">{info}</p>

								<Link
									to="#"
									className="flex self-end pt-1 text-[0.8rem] tracking-tight text-neutral-300"
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
					{fraudBenefits.map(({ title, subtext }, idx) => {
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
export default Fraud;
