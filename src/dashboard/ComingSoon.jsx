import { SparklesCore } from "../components/anims/sparkles";

const ComingSoon = () => {
	return (
		<div className="relative grid place-items-center h-full w-full">
			Coming Soon
			<SparklesCore
				className="absolute top-0 left-0 h-full"
				particleColor="#343434"
				particleDensity={60}
			/>
		</div>
	);
};

export default ComingSoon;
