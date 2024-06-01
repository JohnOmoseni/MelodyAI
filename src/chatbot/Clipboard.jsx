import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import TooltipWrapper from "@components/TooltipWrapper";
import { useState } from "react";

function Clipboard({ text }) {
	const [copyIcon, setCopyIcon] = useState("Copy");
	const IconToShow =
		copyIcon === "Copy" ? HiOutlineClipboard : HiOutlineClipboardCheck;

	const handleCopyText = () => {
		if (!text) return;
		const res = navigator.clipboard.writeText(text);
		console.log(res, copyIcon);

		res
			.then(() => {
				setCopyIcon("Copied");
			})
			.finally(() => {
				setTimeout(() => {
					setCopyIcon("Copy");
				}, 2000);
			});
	};

	return (
		<TooltipWrapper tooltip={copyIcon} position="top">
			<div
				className={`icon p-1 text-neutral-400 rounded-md transition-colors hover:bg-neutral-800 hover:text-white active:scale-95 active:translate-y-1 hover:drop-shadow-sm bg-neutral-700`}
				onClick={handleCopyText}
			>
				<IconToShow size={18} color="#999" className="opacity-80" />
			</div>
		</TooltipWrapper>
	);
}
export default Clipboard;
