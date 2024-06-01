import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { TbArrowUp } from "react-icons/tb";
import { HttpCaller } from "@lib/fetch/getReq";
import IconWrapper from "../IconWrapper";
import Clipboard from "../Clipboard";
import { setChatLog, setIsLoading } from "@redux/features/chatbotSlice";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { postChatbot } from "@lib/fetch/postReq";

function ChatInput({ className, popup }) {
	const { screenSize, chatLog } = useSelector((state) => state.chatbotState);
	const { token } = useSelector((state) => state.userState);
	const { project } = useSelector((state) => state.dashboardState);
	const { projectId: id } = project;

	const [text, setText] = useState("");
	const [showEmoji, setShowEmoji] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();
	const textareaRef = useRef(null);
	const emojiContainerRef = useRef(null);

	const projectId = id ? id : "9275464d-a74a-4a2f-8914-2d131eee7b31";

	useEffect(() => {
		textareaRef?.current && textareaRef.current.focus();
	}, []);

	useEffect(() => {
		if (text === "") {
			textareaRef?.current.setAttribute("rows", "1");
		}
	}, [text]);

	useEffect(() => {
		textareaRef?.current &&
			textareaRef.current?.scrollIntoView({ behaviour: "smooth" });
	}, [text]);

	const handleInputChange = (e) => {
		setText(e.target.value);
		adjustTextAreaHeight();
	};

	const handleKeyDown = (e) => {
		if (e.code === "Enter") {
			handleSend(e);
		}
	};

	const adjustTextAreaHeight = () => {
		const textarea = textareaRef?.current;

		// max no of rows
		const maxRows = 5;
		const lineHeight = parseInt(
			window.getComputedStyle(textarea).lineHeight,
			10
		);
		const rows = Math.min(
			maxRows,
			Math.floor(textarea.scrollHeight / lineHeight)
		);

		textarea.rows = rows;
		if (rows >= 5) {
			textarea.style.overflowY = "auto";
		}
	};

	const handleSend = async (e) => {
		e.preventDefault();
		if (!text) return;

		const msg = text.trim();
		const prompt = {
			type: "msg",
			message: msg,
			outgoing: "true",
		};
		console.log({ ...prompt, project_id: projectId });

		const chatLogNew = [...chatLog, { ...prompt, timestamp: Date.now() }];
		dispatch(setChatLog(chatLogNew));
		dispatch(setChatLog([...chatLogNew, { loading: true }]));
		setText("");

		setIsLoading(true);
		const body = { ...prompt, project_id: projectId };
		try {
			const res = await postChatbot(body, token);
			// const res = await HttpCaller(
			// 	"chatbot",
			// 	"POST",
			// 	{ ...prompt, project_id: projectId },
			// 	{
			// 		"Content-Type": "application/json",
			// 		Authorization: `Bearer ${token}`,
			// 	},
			// 	"true"
			// );

			console.log(`Response: ${res}`);
			if (res?.success) {
				const response = {
					...res?.data?.response,
					timestamp: res?.data?.milli_timestamp,
				};
				dispatch(setChatLog(chatLogNew.filter((elem) => !elem?.loading)));
				dispatch(setChatLog([...chatLogNew, response]));
			}
		} catch (error) {
			const bot = {
				type: "error",
				incoming: "true",
				timestamp: Date.now(),
				error: true,
			};
			const errorArray = [...chatLogNew, bot];
			console.error(`Error: ${error}`);
			dispatch(setChatLog(chatLogNew.filter((elem) => !elem?.loading)));
			dispatch(setChatLog(errorArray));
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	const handleEmojiSelect = (emoji) => {
		const symbol = emoji.unified.split("_");
		const codeArray = [];
		symbol.forEach((sym) => codeArray.push(`0x${sym}`));

		let em = String.fromCodePoint(...codeArray);
		setText(text + em);
		console.log(emoji, symbol, codeArray, em);
	};

	return (
		<div
			className={twMerge(
				"chatbot-input w-full bg-[#222] py-2.5 px-2 sm:p-3 shadow-200",
				className
			)}
		>
			<form className="w-full mx-auto relative flex-row py-3 px-3 gap-3 border border-solid border-[#E975A8] rounded-md">
				<div className="flex-1 w-full flex-row gap-3 ">
					<Clipboard text={text} />

					<textarea
						type="text"
						ref={textareaRef}
						value={text}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						placeholder="Message Melody AI..."
						rows={1}
						className="field-reset !whitespace-pre-wrap flex-1 placeholder:text-neutral-600 resize-none leading-5 truncate overflow-y-auto"
					/>

					<div title="emoji" className="hover:text-slate-800 z-[999]">
						<BsEmojiSmile
							color="#999"
							className="opacity-80"
							size={18}
							onClick={() => setShowEmoji(!showEmoji)}
						/>
						{showEmoji && (
							<div
								ref={emojiContainerRef}
								className={`showPicker absolute overflow-auto ${
									popup ? "bottom-[130%] left-0" : "bottom-[120%] right-0"
								}`}
							>
								<Picker
									data={data}
									emojiSize={20}
									emojiButtonSize={28}
									maxFrequentRows={0}
									previewPosition="top"
									perLine={screenSize >= 640 ? 12 : 7}
									theme="dark"
									navPosition="bottom"
									onEmojiSelect={handleEmojiSelect}
								/>
							</div>
						)}
					</div>
				</div>

				<IconWrapper
					icon={<TbArrowUp size={20} color="#999" />}
					className="text-shadow !p-1 !bg-grad-100 opacity-95"
					tooltip="Send"
					type="submit"
					onClick={handleSend}
					disabled={isLoading}
				/>
			</form>
		</div>
	);
}
export default ChatInput;
