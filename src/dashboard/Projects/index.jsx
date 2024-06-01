import { getAllProjects } from "@lib/fetch/getReq";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingAnim from "@components/Loader/LoadingAnim";
import Error from "@components/Error";
import { useState } from "react";

function AllProjects() {
	const {
		token,
		user: { id: userId },
	} = useSelector((state) => state.userState);
	const [controller, setController] = useState(new AbortController());

	const { data, isLoading, error, isError, refetch } = useQuery({
		queryKey: ["projects", userId],
		queryFn: ({ signal }) => getAllProjects(token, { signal }),
		enabled: !!userId,
	});

	const handleFetch = () => {
		const newController = new AbortController();
		setController(newController);
		refetch({ signal: newController.signal });
	};

	const handleAbort = () => {
		controller.abort();
	};

	if (isLoading) return <LoadingAnim />;
	if (isError) {
		Swal.fire({
			icon: "error",
			titleText: "Something went wrong!",
			showDenyButton: false,
			confirmButtonText: "Try again.",
		});
	}

	return (
		<div className="w-full grid place-items-center overflow-hidden">
			<div className="">
				<h2 className="text-center">All Projects</h2>
				{data?.data?.length > 0 ? (
					<ul className="flex-row gap-3 !flex-wrap">
						{data?.data?.map((project, idx) => (
							<li key={idx} className="">
								<Link
									to={`/dashboard/insights/projects/${project?.id}`}
									state={{ project }}
									className=""
								>
									<span>{project?.project_name}</span>
								</Link>
							</li>
						))}
					</ul>
				) : (
					<div>You have no existing project</div>
				)}
			</div>
		</div>
	);
}

export default AllProjects;
