import { twMerge } from "tailwind-merge";
import { BackgroundBeams } from "../components/anims/bg-beams";

function SectionLayout({ children, className }) {
	return (
		<div
			className={twMerge(
				`relative card w-full h-full pt-3 pb-6 px-4 md:pt-[3%] bg-[#222] bg-opacity-60 rounded-md overflow-hidden`,
				className
			)}
		>
			{children}
			<BackgroundBeams />
		</div>
	);
}
export default SectionLayout;
