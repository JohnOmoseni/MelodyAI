import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { innerAnimate, container } from "@lib/animate";
import { Buttons } from "@components/Buttons";
import { blogs, posts } from "@constants/Blogs";
import { BsSend } from "react-icons/bs";
import HeroComponent from "@components/HeroComponent";
import HeroImage from "@components/HeroImage";
import img from "@assets/image4.png";
import columnImg from "@assets/Whitepaper.png";

function Blogs() {
	const [email, setEmail] = useState("");

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
					<motion.h1 variants={innerAnimate} className="whitespace-nowrap">
						Stay in the <span className="text-grad">Loop</span>
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
						className="my-14 flex-row !justify-start gap-3.5 md:gap-5 max-sm:flex-wrap"
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
							isIcon
							Icon={BsSend}
							notAnimate
							onClick={handleSubmit}
							className="bg-grad-100 flex-1 text-white shadow-md"
						/>
					</motion.div>
				</motion.div>

				<HeroImage src={img} altname="img" />
			</HeroComponent>

			<div className="p-section">
				<h2 className="text-center uppercase text-grad">Featured</h2>
				<div className="my-[4em] flex-column md:grid md:grid-cols-2 gap-10 w-[96%] mx-auto">
					<div className="rounded-sm w-full shadow-md md:order-2 md:h-full">
						<img src={columnImg} alt="" />
					</div>
					<ul className="w-full flex-column gap-10 ">
						{blogs.map(({ id, img, title, tag, writer, date }) => {
							return (
								<li
									key={id}
									className="w-full overflow-hidden rounded-sm bg-grad-100 shadow-md"
								>
									<Link
										to="#"
										className="w-full flex-column sm:flex-row gap:4 relative z-10"
									>
										<div className="absolute inset-[2px] -z-10 bg-[#222] rounded-[1px]"></div>
										<div className="h-[120px] sm:h-[250px] md:basis-[40%] md:mr-3 mx-auto sm:order-2 overflow-hidden">
											<img src={img} alt="img" />
										</div>
										<div className="w-full flex-column relative sm:flex-1 sm:self-stretch gap-1 py-4 px-5">
											<p className="text-neutral-400 text-sm font-kinn uppercase">
												{tag}
											</p>
											<h4 className="text-white w-full capitalize font-semibold tracking-tight">
												{title}
											</h4>
											<span className="w-full sm:absolute r-0 bottom-4 text-end pt-6 text-sm tracking-tight text-neutral-400">
												{writer} - {date}
											</span>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<div className="p-section">
				<h2 className="text-center uppercase text-grad">Latest Posts</h2>
				<ul className="my-8 flex-column sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 md:px-[1%] mx-auto">
					{posts.map(({ id, tag, img, title, body, writer, date }) => {
						return (
							<li
								key={id}
								className=" rounded-md border border-solid border-neutral-400 border-t-0 overflow-hidden"
							>
								<Link to="#" className="w-full grid-rows-100 gap-4">
									<div className="max-h-[200px]">
										<img src={img} alt="img" />
									</div>
									<div className="py-2 px-3.5 ">
										<span className="text-sm mb-1.5 uppercase text-neutral-500">
											{tag}
										</span>
										<h3 className="text-white tracking-tight">{title}</h3>
										<p className="w-full my-2 text-base text-neutral-400">
											{body}
										</p>
										<span className="w-full text-end pt-4 text-sm tracking-tight text-neutral-400">
											{writer} - {date}
										</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
export default Blogs;
