import { ResponsivePie } from "@nivo/pie";
import Heading from "../Heading";
import { mockPieData as data } from "@data/mockNivoData.js";

function PieChart() {
  return (
    <div className="flex-column gap-2 sm:flex-row !justify-between">
      <div className="flex-column gap-2 self-start my-4 mx-[4%]">
        <Heading title="Demographic Segments" />
        <ul className="flex-1 flex-column list-item gap-4 mt-6">
          {[0, 1, 2, 3, 4, 5]?.map((item) => (
            <li
              key={item}
              className="!list-disc text-sm flex-row gap-6 !justify-between"
            >
              <span>18 -39</span>
              <span>38.6%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[75vh] w-full sm:grid place-items-center">
        <ResponsivePie
          data={data}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "white",
                  // stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: "white",
                },
              },
              ticks: {
                line: {
                  stroke: "white",
                  strokeWidth: 1,
                },
                text: {
                  fill: "white",
                  // fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: "white",
                // fill: colors.grey[100],
              },
            },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={"white"}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsRadiusOffset={0.4}
          arcLabelsSkipAngle={7}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
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
export default PieChart;
