import { twMerge } from "tailwind-merge";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function GoBack({ onClick, className }) {
	const navigate = useNavigate();

	return (
		<IconBg onClick={() => !onClick && navigate(-1)} className={className}>
			<MdOutlineArrowBack color="#ddd" size={18} />
		</IconBg>
	);
}

export const IconBg = ({ children, onClick, className }) => {
	return (
		<div
			onClick={onClick}
			className={twMerge(
				`flex-shrink-0 icon rounded-md bg-[#333] p-2 text-sm opacity-80 shadow-sm ring-1 ring-inset ring-br-light hover:bg-[#444]`,
				className
			)}
		>
			{children}
		</div>
	);
};
