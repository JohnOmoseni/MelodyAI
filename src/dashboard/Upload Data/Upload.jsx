import { useState } from "react";
import DataResponse from "./DataResponse";
import UploadForm from "./UploadForm";
import Dropzone from "./Dropzone";
import { useSelector, useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
	setProject,
	setSelectedCollection,
	setCharts,
} from "@redux/features/dashboardStateSlice";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingRequest from "@components/Loader/LoadingRequest";
import { createNewProject, postInsights } from "@lib/fetch/postReq";
import { HttpCaller } from "@lib/fetch/getReq";
import { useMutation } from "@tanstack/react-query";

function Upload() {
	const [file, setFile] = useState();
	const [preview, setPreview] = useState("");
	const [isDataResponse, setIsDataResponse] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { project } = useSelector((state) => state.dashboardState);
	const { token } = useSelector((state) => state.userState);
	const { projectId, projectName } = project;

	const removeUploadedFile = () => {
		setPreview("");
		setFile("");
	};

	const {
		data,
		error,
		isError,
		isPending: isUploading,
		mutate: upload,
	} = useMutation({
		mutationFn: ({ formData }) =>
			createNewProject(projectName, formData, token),
		onError: (error, { actions }) => {
			const errorMessage = JSON.parse(error?.message);
			console.log("Something went wrong Error:", errorMessage);

			const errResponse = errorMessage.detail?.message.includes(
				"There is an existing project with this name"
			)
				? "There is an existing project with this name"
				: "Something went wrong!";

			Swal.fire({
				icon: "error",
				titleText: errResponse,
				showConfirmButton: false,
				showCancelButton: true,
			}).then((result) => {
				if (result.isDismissed) {
					actions?.resetForm();
					removeUploadedFile();
				}
			});
		},
		onSuccess: (response) => {
			if (response && response?.success) {
				const projectId = response?.project?.id;
				const userId = response?.project?.user_id;

				dispatch(setSelectedCollection(response?.project?.columns));
				dispatch(setProject({ projectId, projectName, userId }));
				setIsDataResponse(true);
				toast.success(
					`${response?.message} - ${response?.project?.project_name}`
				);
			}
		},
	});

	console.log(isUploading, isError, error);

	const { isPending: isLoadingInsights, mutate: runCharts } = useMutation({
		mutationFn: (data) => postInsights(data, token),
		retry: 2,
		onSuccess: (response, variables) => {
			if (response?.success) {
				const charts = JSON.parse(response?.data);

				dispatch(setCharts(charts));
				navigate("/dashboard/insights/generate");
				toast.success(
					`Project Insight successfully created  for ${projectName}`
				);
			}
		},
		onError: (error) => {
			console.error("Error:", error);
			toast.error(`Failed to create Project Insight for ${projectName}`);
		},
	});

	const onRun = async (projectName, actions) => {
		if (!file || !projectName || typeof file === "string") {
			setFile("Please upload a file");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		upload({ formData, actions });
	};

	const onRunCharts = async (selectedItems) => {
		if (selectedItems.length === 0) return;

		const data = {
			project_id: projectId,
			coi: selectedItems.join(","),
		};

		runCharts(data);
		return;
		// const response = await postInsights(data, token);
		setIsLoading(true);
		try {
			const response = await HttpCaller(
				"insights",
				"POST",
				data,
				{
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				"true"
			);

			const charts = JSON.parse(response?.data);
			if (response?.success) {
				dispatch(setCharts(charts));
				navigate("generate");
				toast.success(
					`Project Insight successfully created  for ${projectName}`
				);
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error(`Failed to create Project Insight for ${projectName}`);
		} finally {
			setIsLoading(false);
		}
	};

	// if (isError) {
	// 	const errorMessage = JSON.parse(error?.message);

	// 	const errResponse = errorMessage.detail?.message.includes(
	// 		"There is an existing project with this name"
	// 	)
	// 		? "There is an existing project with this name"
	// 		: "Something went wrong!";

	// 	Swal.fire({
	// 		icon: "error",
	// 		titleText: errResponse,
	// 		showCancelButton: true,
	// 		showConfirmButton: false,
	// 	}).then((result) => {
	// 		if (result.isDismissed) {
	// 			console.log("running");
	// 			removeUploadedFile();
	// 		}
	// 	});
	// }

	return (
		<div>
			{isUploading && <LoadingRequest openModal={isUploading} />}
			{isDataResponse ? (
				<DataResponse
					isLoading={isLoadingInsights}
					onRunCharts={onRunCharts}
					setIsDataResponse={setIsDataResponse}
				/>
			) : (
				<div>
					<div className="drop-zone px-[4%]">
						<p className="my-3 mb-5 px-3 text-neutral-400 text-center text-sm ">
							Please upload your file and we would provide you with insights
							report
						</p>
						<Dropzone file={file} setPreview={setPreview} setFile={setFile} />
						{file && (
							<p
								className={`${
									file?.name ? "text-[#aaa]" : "text-pink-600"
								} my-2 px-3 text-shadow text-neutral-400 text-center text-sm font-semibold`}
							>
								{file?.name ? "file uploaded" : file}
							</p>
						)}
					</div>

					<UploadForm onRunData={onRun} isLoading={isUploading} />

					{preview && (
						<div className="relative my-4 w-[70%] mx-auto h-[200px]">
							<img src={preview} alt={file?.name} className="rounded-sm" />
							<button
								className={`absolute icon z-50 -top-4 -right-3 w-[25px] h-[25px] rounded-[50%] shadow-sm border border-solid border-red-300 bg-red-500 cursor-pointer`}
								onClick={removeUploadedFile}
							>
								<XMarkIcon
									className="h-5 w-5 fill-white hover:fill-slate-400"
									aria-hidden="true"
								/>
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
export default Upload;
