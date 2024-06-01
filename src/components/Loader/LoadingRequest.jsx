import ReactModal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { SwapSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function LoadingRequest({ openModal, setAbortFetch, queryKey }) {
	const [open, setOpen] = useState(openModal);
	const queryClient = useQueryClient();

	const abortFetch = () => {
		setOpen(false);
		if (setAbortFetch || queryKey) {
			setAbortFetch(true);
			queryClient.cancelQueries({ queryKey: [queryKey] });
		}
		toast.error("Request cancelled");
	};

	return (
		<ReactModal
			isOpen={open}
			contentLabel="Loading Modal"
			onRequestClose={() => setOpen(false)}
			style={{
				overlay: {
					backgroundColor: "rgba(0,0,0,0.4)",
					zIndex: 9999,
					backdropFilter: "1em",
				},
				content: {
					backgroundColor: "rgba(30,30,30,0.9)",
					color: "black",
					border: "0",
				},
			}}
		>
			<div className="grid h-full place-items-center text-center">
				<div className="flex-column gap-3 !items-center">
					<SwapSpinner size={50} className="icon" color="#ef2de2fd" />
					<span className="font-kinn">Loading...</span>
				</div>
			</div>

			<div
				onClick={abortFetch}
				className="group absolute icon right-3 top-3 cursor-pointer"
				title="close-modal"
			>
				<MdOutlineClose
					size={22}
					className="text-gray-300 group-hover:text-black group-hover:scale-95 transition-colors"
				/>
			</div>
		</ReactModal>
	);
}
export default LoadingRequest;
