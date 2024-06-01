import { Link } from "react-router-dom";
import { Buttons } from "@components/Buttons";

export default function Options() {
	return (
		<div className="grid place-items-center w-full h-full">
			<div className="flex-column !items-center gap-12">
				<Link to="upload" className="group flex">
					<Buttons
						title="Create new project"
						className="text-base py-2.5 bg-zinc-700 w-max"
					/>
				</Link>
				<Link to="projects" className="group flex">
					<Buttons
						title="View existing projects"
						className="text-base py-2.5 bg-zinc-700 w-max"
					/>
				</Link>
			</div>
		</div>
	);
}
