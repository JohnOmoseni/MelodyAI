import Heading from "../Heading";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "@data/mockNivoData.js";

function LineChart() {
  return (
    <div className="">
      <div className="flex-column gap-2 my-4 mx-[2%]">
        <Heading title="Revenue" className="w-full" />

        <div className="my-4">
          <span className="text-sm text-neutral-500 tracking-wider">
            Current Month
          </span>
          <div className="my-1 flex-row gap-6 !justify-between max-w-[35%]">
            <p className="text-xl text-grad-200 font-bold pt-1 text-shadow">
              N250,000
            </p>
            <div className="flex-row gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-300 shadow-md blur-[2px]" />
              <p className="text-white text-shadow">9%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[75vh] w-full">
        <ResponsiveLine
          data={data}
          theme={{
            axis: {
              domain: {},
              legend: {
                text: {
                  fill: "#666",
                },
              },
              ticks: {
                line: {
                  stroke: "#666",
                  strokeWidth: 1,
                },
                text: {
                  fill: "#666",
                },
              },
            },
            legends: {
              text: {
                fill: "#666",
              },
            },
            tooltip: {
              container: {
                color: "#666",
              },
            },
          }}
          colors={{ scheme: "nivo" }} // added
          margin={{ top: 50, right: 40, bottom: 50, left: 40 }}
          xScale={{
            type: "point",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: true,
          }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: "transportation", // added
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickValues: 5, // added
            tickSize: 3,
            tickPadding: 10,
            tickRotation: 0,
            legend: "count", // added
            legendOffset: -30,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={8}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
export default LineChart;
