import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
	subtitleAnimate,
	btnAnimate,
	headingAnimate,
	innerAnimate,
	container,
} from "@lib/animate";
import { Link } from "react-router-dom";
import { data } from "./Data";
import AOS from "aos";
import "aos/dist/aos.css";
import imageK from "@assets/image4.png";
import imageL from "@assets/Group 8644.png";
import imageM from "@assets/spec (7).png";
import imageU from "@assets/spec (8).png";
import imageR from "@assets/Group 8650.png";
import imageT from "@assets/Group 8645.png";
import imageQ from "@assets/spec (6).png";

const LandingPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<section className="flex p-4 justify-center w-full flex-auto bg-center bg-cover rounded-sm overflow-hidden bg-[#282828]">
				<video autoPlay muted loop className="px-6 rounded-lg">
					<source
						src="https://res.cloudinary.com/dbs0zbvwx/video/upload/c_scale,h_450,w_1350/v1699790177/WhatsApp_Video_2023-10-30_at_4.44.43_PM_lfqn93.mp4"
						type="video/mp4"
					/>
				</video>
			</section>

			{/* Hero section */}

			<section className="bg-[#282828] max-sm:pb-[4em] :min-h-[80vh] bg-center bg-cover w-full">
				<div className="grid grid-cols-1 gap-6 min-h-[80vh] md:flex items-center py-6 px-4 md:px-[6%] md:pr-[10%] md:mx-auto md:justify-between">
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="animate"
						viewport={{ once: true }}
						className="flex flex-col sm:px-4 py-6"
					>
						<motion.h1
							variants={headingAnimate}
							className="p-4 md:text-5xl font-semibold text-white"
						>
							We are the{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]">
								future
							</span>
							<br /> of business intelligence
						</motion.h1>
						<motion.p
							variants={subtitleAnimate}
							className="p-4 text-[#BBBBBB] text-left max-w-2xl"
						>
							Octave-Melody-AI is a product that leverages data science and web
							application technologies to operationalize business data by
							building predictive web applications <br /> that tracks
							performance KPIs using interactive dashboards in real time.
						</motion.p>
						<motion.button variants={btnAnimate} className="self-start">
							<Link
								to="/auth/sign-in"
								className="hover:scale-105 duration-200 ml-5 mt-10 mb-4
                rounded-md bg-gradient-to-r from-pink-500 to-indigo-500 px-4
                py-3 text-base font-medium text-white"
							>
								Get Started
							</Link>
						</motion.button>
					</motion.div>

					<motion.div
						initial={{ motionRotation: 0 }}
						viewport={{ margin: -"40px" }}
						animate={{ rotate: 360 }}
						transition={{
							duration: 4.5,
							repeat: Infinity,
							restSpeed: 0.01,
							repeatType: "mirror",
						}}
					>
						<div>
							<img
								src={imageK}
								className="w-[200px] mx-auto py-10 md:w-[320px]"
								alt="frustrum"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			<motion.section
				variants={container}
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true }}
				className="p-6 py-10 md:py-[6%]  bg-[#333] bg-center bg-cover w-full"
			>
				<motion.div className="w-full mt-8 font-semibold text-center text-md">
					<motion.span
						variants={innerAnimate}
						className="bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]"
					>
						YOUR BUSINESS, OUR PROBLEM{" "}
					</motion.span>
				</motion.div>

				<motion.h1
					variants={innerAnimate}
					className=" font-medium text-center mt-2 max-w-screen text-2xl text-[#ffffff]"
				>
					BUILD PREDICTIVE WEB APPLICATIONS FOR YOUR BUSINESS
				</motion.h1>
				<div
					data-aos="flip-right"
					data-aos-duration="2000"
					data-aos-delay="1000"
					className="flex-column md:flex-row gap-6 md:px-[4%] mt-16 justify-center flex-1 mx-auto"
				>
					{data.map(({ id, image, info, name }) => {
						return (
							<div
								key={id}
								className="flex flex-col items-center justify-center p-4 md:min-h-[300px] rounded-sm border border-r-purple-800 border-b-purple-800 border-t-pink-400 border-l-pink-400"
							>
								<div className="w-20 h-20 rounded-full portfolio_item-image">
									<img src={image} alt={name} />
								</div>
								<h3 className="p-3 text-white">{name}</h3>
								<p className="text-left max-w-md text-[#BBBBBB] p-2">{info}</p>
							</div>
						);
					})}
				</div>
			</motion.section>

			{/* Data insight page */}

			<section className="bg-[#282828] bg-cover bg-center py-8 md:py-[5%] px-[4%] w-full min-h-full">
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					className="relative grid md:grid-cols-metric space-y-2 mx-auto space-x-4 gap-[3rem] py-6 md:py-[6%] md:place-items-center max-w-[1300px]"
				>
					<div className="md:shrink-0 max-sm:max-w-[250px] mx-auto pt-8 rounded-sm md:max-w-[400px]">
						<img
							data-aos="fade-up"
							data-aos-duration="2000"
							src={imageL}
							className=""
							alt=""
						/>
					</div>

					<div className="flex flex-col py-2 max-sm:mx-4">
						<h3
							data-aos="fade-up"
							data-aos-duration="2000"
							className="bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8] font-semibold text-md"
						>
							DATA INSIGHTS
						</h3>
						<h2
							data-aos="fade-up"
							data-aos-duration="2000"
							className="tracking-tighter md:py-3 text-white text-left font-semibold pt-4 text-2xl"
						>
							Business Data Insights In Real Time
						</h2>

						<div className="flex flex-col justify-start py-3 max-sm:pr-3">
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="tracking-lighter  md:text-left text-[#BBBBBB]"
							>
								Stay ahead of your competition by using insights derived from
								your data in real time to make informed decisions and increase
								business revenue exponentially.
							</p>
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="py-4 text-left text-[#BBBBBB]"
							>
								Stay ahead of your competition by using insights derived from
								your data in real time to make informed decisions and increase
								business revenue exponentially.
							</p>
						</div>
					</div>

					<div className="hidden md:block absolute top-[-1em] right-4">
						<img
							data-aos="fade-up"
							data-aos-duration="2000"
							src={imageM}
							className="md:shrink-0 "
							alt="frustrum"
						/>
					</div>
				</div>
			</section>

			{/* sales page */}

			<section className="bg-[#282828] bg-cover bg-center py-8 md:py-[5%] lg:pl-[8%] px-[4%] w-full min-h-full">
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					className="relative grid md:grid-cols-sales space-y-2 mx-auto space-x-4 md:grid-cols-2 gap-[2.5rem] py-6 md:py-[6%] md:place-items-center max-w-[1300px]"
				>
					<div className="md:flex flex-col py-2 max-sm:mx-4">
						<h3
							data-aos="fade-up"
							data-aos-duration="2000"
							className="bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8] font-semibold text-md"
						>
							SALES PREDICTION
						</h3>
						<h2
							data-aos="fade-up"
							data-aos-duration="2000"
							className="py-3 text-white text-left font-semibold pt-4 text-2xl"
						>
							Predict your Sales
						</h2>

						<div className="flex flex-col justify-start py-3 max-sm:pr-3">
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="tracking-lighter md:text-left text-[#BBBBBB]"
							>
								Stay ahead of your competition by using insights derived from
								your data in real time to make informed decisions and increase
								business revenue exponentially.
							</p>
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="py-4 text-left text-[#BBBBBB]"
							>
								Stay ahead of your competition by using insights derived from
								your data in real time to make informed decisions and increase
								business revenue exponentially.
							</p>
						</div>
					</div>

					<div className="md:shrink-0 max-sm:max-w-[250px] max-sm:!mx-auto pt-10 rounded-sm md:max-w-[400px] order-2 md:order-none sm:justify-self-center">
						<img
							data-aos="fade-up"
							data-aos-duration="2000"
							src={imageT}
							className=""
							alt=""
						/>
					</div>

					<div className="hidden md:block absolute md:top-[-4em] left-[-1em]">
						<img
							data-aos="fade-up"
							data-aos-duration="2000"
							src={imageU}
							className="mx-auto md:w-full md:shrink-0"
							alt=""
						/>
					</div>
				</div>
			</section>

			{/* Metrics Page */}

			<section className="bg-[#282828] bg-cover bg-center py-8 md:py-[5%] px-[4%] w-full min-h-full">
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					className="relative grid md:grid-cols-metric place-items-center space-y-2 selection:mx-auto md:grid-cols-2 gap-6 md:gap-[2rem] py-6 mx-auto md:place-items-center max-w-[1300px]"
				>
					<div className="md:shrink-0 max-sm:max-w-[250px] mx-auto pt-10 rounded-sm md:max-w-[400px] order-2 md:order-none">
						<img
							data-aos="fade-up"
							data-aos-duration="2000"
							src={imageR}
							className=""
							alt=""
						/>
					</div>

					<div className="flex flex-col py-2 max-sm:mx-4">
						<h3
							data-aos="fade-up"
							data-aos-duration="2000"
							className="bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8] font-semibold text-md"
						>
							METRICS
						</h3>
						<h2
							data-aos="fade-up"
							data-aos-duration="2000"
							className="py-3 text-white text-left font-semibold pt-4 text-2xl"
						>
							Monitor Business Metrics
						</h2>

						<div className="flex flex-col justify-start py-3 max-sm:pr-3">
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="tracking-lighter md:text-left text-[#BBBBBB]"
							>
								Stay ahead of your competition by using insights derived from
								your data in real time to make informed decisions and increase
								business revenue exponentially.
							</p>
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="py-4 text-left text-[#BBBBBB]"
							>
								Stay ahead of your competition by using insights derived from
								your data in real time to make informed decisions and increase
								business revenue exponentially.
							</p>
						</div>
					</div>

					<div className="hidden md:block absolute top-[-2em] right-4">
						<img
							data-aos="fade-up"
							data-aos-duration="2000"
							src={imageQ}
							className=""
							alt="frustrum"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
