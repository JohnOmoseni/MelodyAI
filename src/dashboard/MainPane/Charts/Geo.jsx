import Heading from "../Heading";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "@data/mockGeoFeatures";
import { mockGeographyData as data } from "@data/mockNivoData";

function Geo() {
  return (
    <div className="max-sm:min-h-[100px] my-4 mx-[4%]">
      <Heading />
      <div className="mt-4 mb-8">
        <div className="flex-row !justify-between gap-6 text-neutral-400 text-shadow text-base">
          <span>Current</span>
          <span>150k</span>
        </div>

        <div className="w-full h-1 bg-[#333] relative my-1.5 rounded-sm overflow-hidden shadow-sm">
          <span
            className={`w-[50%] h-full absolute left-0 bg-red-200 rounded-sm`}
          />
        </div>
      </div>

      <div className="w-full h-[70vh]">
        <ResponsiveChoropleth
          data={data}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "#777",
                },
              },
              legend: {
                text: {
                  fill: "#777",
                },
              },
              ticks: {
                line: {
                  stroke: "#777",
                  strokeWidth: 1,
                },
                text: {
                  fill: "#777",
                },
              },
            },
            legends: {
              text: {
                fill: "#777",
              },
            },
          }}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={100}
          projectionTranslation={[0.49, 0.6]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1.5}
          borderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 0,
              translateY: -10,
              itemsSpacing: 0,
              itemWidth: 84,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#ccc",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#ffffff",
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
export default Geo;
