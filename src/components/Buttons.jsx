import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const buttonAnimate = {
	hidden: { opacity: 0, y: 100 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, type: "spring", mass: 0.3 },
	},
};

export const Buttons = ({
	title,
	type,
	className,
	notAnimate,
	isIcon,
	Icon,
	onClick,
}) => {
	return (
		<motion.button
			type={type ?? "button"}
			className={twMerge(
				`tracking-tight font-kinn w-max px-5 py-3.5 rounded-md text-regular max-sm:leading-4`,
				isIcon ? "flex-row gap-2.5" : "text-shadow",
				className
			)}
			variants={!notAnimate ? buttonAnimate : null}
			viewport={{ once: true }}
			onClick={onClick}
		>
			{isIcon && (
				<span className="">
					<Icon size="20" />
				</span>
			)}
			{title}
		</motion.button>
	);
};
