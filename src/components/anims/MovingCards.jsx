import React, { useEffect, useRef, useState } from "react";
import logo1 from "@assets/elite.png";
import logo2 from "@assets/nithub.png";
import logo3 from "@assets/mdena.png";
import logo4 from "@assets/metro.png";
import { cn } from "@lib/utils";

const images = [logo1, logo2, logo3, logo4];

export const MovingCards = () => {
	const [start, setStart] = useState(false);
	const direction = "left";
	const speed = "slow";
	const pauseOnHover = true;
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller my-[4em] relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{images.map((img, idx) => (
					<li
						className="w-[350px] max-w-full relative flex-shrink-0 px-8 py-6 md:w-[450px]"
						key={idx}
					>
						<img src={img} className="" alt="" />
					</li>
				))}
			</ul>
		</div>
	);
};
