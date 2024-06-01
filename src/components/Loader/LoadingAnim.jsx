import { useEffect } from "react";
import { motion } from "framer-motion";
import { SwapSpinner } from "react-spinners-kit";
import { cn } from "@lib/utils";

const container = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeIn",
			staggerChildren: 0.35,
		},
	},
	exit: {
		opacity: 0,
		x: -200,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
	},
};

const itemMain = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			ease: "easeIn",
			duration: 3,
		},
	},
};

const LoadingAnim = ({ setLoading, duration = "2000", className }) => {
	useEffect(() => {
		if (setLoading) {
			const timer = setTimeout(() => {
				setLoading(false);
			}, duration);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [setLoading, duration]);
	return (
		<motion.div
			className={cn("loading", className)}
			variants={container}
			initial="hidden"
			animate="show"
			exit="exit"
			// onAnimationComplete={() => setLoading(false)}
		>
			<motion.div
				className="flex flex-col items-center gap-4"
				variants={itemMain}
			>
				<SwapSpinner size={50} className="icon" color="#ef2de2fd" />
				<span className="font-kinn">Loading...</span>
			</motion.div>
		</motion.div>
	);
};

export default LoadingAnim;
