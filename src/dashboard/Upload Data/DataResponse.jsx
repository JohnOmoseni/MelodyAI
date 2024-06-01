import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonUpload from "../ButtonUpload";
import { MdOutlineArrowBack } from "react-icons/md";
import { IconBg } from "../IconBg";
import LoadingRequest from "@components/Loader/LoadingRequest";

const DataResponse = ({ isLoading, onRunCharts, setIsDataResponse }) => {
	const { selectedCollection: collections } = useSelector(
		(state) => state.dashboardState
	);
	const [selectedItems, setSelectedItems] = useState([]);

	const handleButtonClick = (newValue) => {
		if (selectedItems.some((value) => value === newValue)) {
			// remove from array
			setSelectedItems((prevState) =>
				prevState.filter((value) => value !== newValue)
			);
		} else {
			// add to array
			setSelectedItems((prevState) => [...prevState, newValue]);
		}
	};

	return isLoading ? (
		<LoadingRequest openModal={isLoading} />
	) : (
		<div className="w-full">
			<div className="flex-row gap-3 relative px-3">
				<IconBg onClick={() => setIsDataResponse(false)}>
					<MdOutlineArrowBack color="#ddd" size={18} />
				</IconBg>

				<h3 className="flex-grow px-3 font-kinn text-shadow leading-6 mt-1 text-neutral-300 text-center">
					Select your monitoring parameters
				</h3>
			</div>

			<ul className="group w-[90%] my-[3rem] md:mt-[4rem] mx-auto min-h-[40vh] sm:w-max-[600px] grid grid-cols-collection gap-5">
				{collections?.length > 0 ? (
					collections.map((item, idx) => {
						const selected = selectedItems.some((value) => value === item);
						return (
							<li
								key={idx}
								onClick={() => handleButtonClick(item)}
								className={`${
									selected ? "bg-grad-300" : "bg-[#242424]"
								} relative capitalize bg-opacity-90 text-sm text-white text-center leading-4 w-full px-4 py-3 flex-row gap-3 font-semibold text-shadow transition border-br-light border-solid hover:bg-[#080808] hover:border-b active:scale-95 rounded-md cursor-pointer shadow-100`}
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

			{collections?.length > 0 && (
				<ButtonUpload
					title="Run Data"
					disabled={isLoading}
					onClick={() => onRunCharts(selectedItems)}
					className="!w-[200px]"
				/>
			)}
		</div>
	);
};
export default DataResponse;
