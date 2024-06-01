import { useSelector } from "react-redux";
import { RenderChart } from "./RenderChart";
import { useNavigate } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import SectionLayout from "../SectionLayout";
import { IconBg } from "../IconBg";
import ChatHeading from "@chatbot/MainPane/ChatHeading";
import ChatMain from "@chatbot/MainPane/ChatMain";
import ChatInput from "@chatbot/MainPane/ChatInput";
import { useState } from "react";

function Insights() {
	const { project, charts } = useSelector((state) => state.dashboardState);
	const { projectId, projectName } = project;
	const navigate = useNavigate();
	const [openChatbot, setOpenChatbot] = useState(false);

	return (
		<div className="relative" onClick={() => setOpenChatbot(false)}>
			{!openChatbot && (
				<div
					className="fixed right-4 bottom-4 bg-[#111] bg-opacity-70 icon p-2.5 rounded-[50%] text-2xl hover:bg-[#444] hover:drop-shadow-lg border border-solid border-br-light active:scale-90 transition shadow-100"
					style={{ zIndex: "99" }}
					onClick={(e) => {
						e.stopPropagation();
						setOpenChatbot(true);
					}}
				>
					<BsFillChatDotsFill color="#01a137fd" />
				</div>
			)}
			<div>
				<div className="mt-3 mb-8 flex-row gap-4 relative px-3">
					<IconBg onClick={() => navigate(-1)}>
						<MdOutlineArrowBack color="#ddd" size={18} />
					</IconBg>
					<div className="flex-grow ">
						<h3 className="capitalize  text-center text-shadow tracking-wide">
							Project Insights {projectName && ` - ${projectName}`}
						</h3>
						{projectId && (
							<p className="flex-row max-[500px]:hidden truncate text-sm ">
								{projectId}
							</p>
						)}
					</div>
					<IconBg className="">
						<p>Download</p>
					</IconBg>
				</div>
				<div className="flex-column gap-4">
					{charts?.length > 0 ? (
						charts?.map(
							({ title, x_axis, y_axis, insight, plot_type }, idx) => {
								const options = {
									responsive: true,
									plugins: {
										legend: {
											display: "true",
											position: "bottom",
											labels: { fontSize: "18px", padding: 30 },
										},
									},
									layout: {
										padding: { left: 10, right: 10, bottom: 0, top: 0 },
									},
									tooltips: { enabled: true },
									maintainAspectRatio: false,
								};
								const labels = x_axis;
								const dataToRender = {
									labels,
									datasets: [
										{
											label: title,
											opacity: 2,
											fill: true,
											data: y_axis.map((data) => data),
											backgroundColor: [
												"rgba(255, 99, 132, 0.2)",
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
												"rgba(75, 192, 192, 0.2)",
												"rgba(153, 102, 255, 0.2)",
												"rgba(255, 159, 64, 0.2)",
											],
											borderColor: [
												"rgba(255, 99, 132, 1)",
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
												"rgba(75, 192, 192, 1)",
												"rgba(153, 102, 255, 1)",
												"rgba(255, 159, 64, 1)",
											],
											borderWidth: 1,
											hoverBorderWidth: 1,
											hoverBorderColor: "rgba(255,255,255,0.1)",
										},
									],
								};
								return (
									<SectionLayout key={idx}>
										<RenderChart
											data={dataToRender}
											chartOptions={options}
											chartType={plot_type}
											insightsText={insight}
											title={title}
										/>
										{/* <TestRenderCharts
											data={dataToRender}
											chartOptions={options}
											insightsText={insight}
											idx={idx}
										/> */}
									</SectionLayout>
								);
							}
						)
					) : (
						<div className="min-h-[55vh] w-full grid place-items-center text-center">
							No chart to display
						</div>
					)}
				</div>
			</div>

			{openChatbot && (
				<div
					style={{ zIndex: "999" }}
					className="chatbot z-50 fixed bottom-2 right-4 flex-column !justify-start max-sm:min-[290px] min-w-[380px] max-w-[450px] mx-auto h-[90vh] bg-[#111] rounded-2xl shadow-md overflow-hidden"
					onClick={(e) => e.stopPropagation()}
				>
					<ChatHeading popup />
					<div className="w-full relative flex-1 pt-6 px-4 pb-6 md:px-[3%] md:pl-[2%] mb-2.5 overflow-x-hidden overflow-y-auto">
						<ChatMain />
					</div>
					<ChatInput className="bg-zinc-900" popup />
				</div>
			)}
		</div>
	);
}
export default Insights;
