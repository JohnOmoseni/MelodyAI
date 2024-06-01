export const container = {
	hidden: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			ease: "easeIn",
			staggerChildren: 0.8,
			when: "beforeChildren",
		},
	},
};

export const leftPane = {
	hidden: { opacity: 0, x: -window.innerWidth },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
			delayChildren: 0.6,
			staggerChildren: 0.8,
			when: "beforeChildren",
		},
	},
};

export const headingAnimate = {
	hidden: { opacity: 0, scale: 1.2 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.6,
		},
	},
};

export const subtitleAnimate = {
	hidden: { opacity: 0, y: 100 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
		},
	},
};

export const btnAnimate = {
	hidden: { opacity: 0, x: -100 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
		},
	},
};

export const innerAnimate = {
	hidden: { opacity: 0, y: 100 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
		},
	},
};

export const listAnimate = {
	hidden: { opacity: 0, y: 100 },
	animate: (custom) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.08,
			duration: 0.8,
			type: "spring",
		},
	}),
};

export const menuVariant = {
	hidden: { y: -window.innerHeight },
	animate: { y: 0, transition: { duration: 1 } },
	exit: { opacity: 0, y: window.innerHeight, transition: { duration: 1 } },
};

export const pageVariant = {
	hidden: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0, transition: { duration: 2 } },
	exit: { opacity: 0, y: 30, transition: { duration: 10 } },
};
