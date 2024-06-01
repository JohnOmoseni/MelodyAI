import Heading from "../Heading";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData } from "@data/mockNivoData.js";

function BarChart({ title }) {
  return (
    <div className=" pt-3 h-[75vh] w-full my-4 mx-[2%]">
      <Heading title={title} />
      <ResponsiveBar
        className=""
        data={mockBarData}
        theme={{
          // added
          axis: {
            domain: {
              line: {
                stroke: "#666",
              },
            },
            legend: {
              text: {
                fill: "#666",
              },
            },
            ticks: {
              line: {
                stroke: "white",
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
        }}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 100, bottom: 50, left: 30 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country", // changed
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 2,
          legend: "food", // changed
          legendPosition: "middle",
          legendOffset: -20,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />{" "}
    </div>
  );
}
export default BarChart;
