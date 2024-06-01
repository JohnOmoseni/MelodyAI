import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import BotLoading from "@components/Loader/BotLoading";

function ChatMain() {
	const { chatLog } = useSelector((state) => {
		return state.chatbotState;
	});

	const elemRef = useRef(null);

	useEffect(() => {
		elemRef?.current && elemRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chatLog]);

	return (
		<div className="relative w-full h-full mb-3 flex flex-col gap-5">
			{chatLog.length > 0 &&
				chatLog?.map((chat, idx) => {
					if (chat?.loading) {
						return <BotLoading key="loading" />;
					}
					return <Chat key={chat?.timestamp} chat={chat} />;
				})}

			<div ref={elemRef} className="absolute bottom-0"></div>
		</div>
	);
}
export default ChatMain;
