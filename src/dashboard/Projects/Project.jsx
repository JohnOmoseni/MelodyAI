import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postInsights } from "@lib/fetch/postReq";
import ButtonUpload from "../ButtonUpload";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setCharts, setProject } from "@redux/features/dashboardStateSlice";
import LoadingAnim from "@components/Loader/LoadingAnim";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IconBg } from "../IconBg";
import { MdOutlineArrowBack } from "react-icons/md";
import Swal from "sweetalert2";

function Project() {
	const { id: projectId } = useParams();
	const {
		state: { project },
	} = useLocation();
	const collections = project?.columns;
	const { token, user } = useSelector((state) => state.userState);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const mutation = useMutation({
		mutationFn: (data) => postInsights(data, token),
		onError: (error, variables, context) => {
			// toast.error(`Failed to generate insight for ${project?.project_name}`);
			const errorMessage = JSON.parse(error.message);
			console.error("Error:", errorMessage);

			const errResponse = errorMessage.detail.message.includes(
				"Project with specified id not found"
			)
				? "Project not found"
				: "Something went wrong!";
			Swal.fire({
				icon: "error",
				titleText: errResponse,
				showDenyButton: false,
				showCancelButton: true,
				showConfirmButton: false,
			});
		},
		onSuccess: (data, variables, context) => {
			const charts = JSON.parse(data?.data);
			dispatch(setCharts(charts));
			dispatch(
				setProject({
					projectId,
					projectName: project?.project_name,
					userId: user?.id,
				})
			);

			navigate("/dashboard/insights/generate");
			toast.success(
				`Project Insight successfully created  for ${project?.project_name}`
			);
		},
	});

	const onRunCharts = () => {
		if (collections.length === 0 || !projectId) return;
		const data = {
			project_id: projectId,
			coi: collections?.join(","),
		};
		mutation.mutateAsync(data);
	};

	if (mutation.isPending) return <LoadingAnim />;

	return (
		<div className="w-full">
			<div className="flex-row gap-3 relative px-3">
				<IconBg onClick={() => navigate(-1)}>
					<MdOutlineArrowBack color="#ddd" size={18} />
				</IconBg>

				<h3>Project id</h3>
				<div>{project && project?.project_name}</div>
			</div>

			<ul className="group w-[90%] my-[3rem] md:mt-[4rem] mx-auto min-h-[40vh] sm:w-max-[600px] grid grid-cols-collection gap-5">
				{collections?.length > 0 ? (
					collections.map((item, idx) => {
						return (
							<li
								key={idx}
								className={`bg-grad-300 relative capitalize bg-opacity-90 text-sm text-white text-center leading-4 w-full px-4 py-3 flex-row gap-3 font-semibold text-shadow transition border-br-light border-solid hover:bg-[#080808] hover:border-b active:scale-95 rounded-md cursor-pointer shadow-100`}
							>
								{item}
							</li>
						);
					})
				) : (
					<li className="text-shadow text-center text-neutral-500 grid place-items-center min-h-[40vh]">
						There is no data column to display
					</li>
				)}
			</ul>

			<ButtonUpload
				title="View Insights"
				disabled={mutation.isPending}
				onClick={() => onRunCharts()}
				className="!w-[200px]"
			/>
		</div>
	);
}

export default Project;
