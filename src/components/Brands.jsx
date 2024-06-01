import logo1 from "@assets/elite.png";
import logo2 from "@assets/nithub.png";
import logo3 from "@assets/mdena.png";
import logo4 from "@assets/metro.png";
import Marquee from "react-fast-marquee";
import { MovingCards } from "./anims/MovingCards";

const Brands = () => {
	return (
		<section className="relative overflow-hidden pt-[4em] pb-8 min-h-[25vh] w-full bg-[#1b1b1f]">
			<span className="text-sm text-grad text-center w-full">Customers</span>
			<h2 className="text-center uppercase py-1.5 px-3">
				Brands we've worked with
			</h2>

			<MovingCards />
			{/* <Marquee
				autoFill={true}
				gradient={true}
				gradientColor="#1b1b1f"
				gradientWidth={60}
				className="my-[4em] justify-between w-full"
			>
				<img src={logo1} className="" alt="" />
				<img src={logo2} className="" alt="" />
				<img src={logo3} className="" alt="" />
				<img src={logo4} className="" alt="" />
			</Marquee> */}
		</section>
	);
};
export default Brands;
