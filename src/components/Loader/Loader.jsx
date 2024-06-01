import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingAnim from "./LoadingAnim";

function Loader({ children, duration }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loading
			? document.querySelector("body").classList.add("loading")
			: document.querySelector("body").classList.remove("loading");
	}, [loading]);

	const height = window.innerHeight - 100;

	return (
		<AnimatePresence key="loading">
			{loading ? (
				<motion.div
					className={`grid place-items-center overflow-hidden bg-inherit`}
					style={{ height: `${height}px` }}
				>
					<LoadingAnim setLoading={setLoading} duration={duration} />
				</motion.div>
			) : (
				children
			)}
		</AnimatePresence>
	);
}

export default Loader;
