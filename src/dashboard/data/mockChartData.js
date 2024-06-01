import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false,
  layout: { autoPadding: true },
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      display: true,
      text: "Melody AI by Octave",
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
};

export const mockData = [
  {
    labels: ["AD"],
    data: [32, 42, 15, 40, 20, 95, 32, 42, 15, 40, 20, 95],
    borderColor: [
      "hsl(229, 70%, 50%)",
      "hsl(296, 70%, 50%)",
      "hsl(97, 70%, 50%)",
      "hsl(340, 70%, 50%)",
    ],
    bgColor: [
      "hsl(229, 70%, 50%)",
      "hsl(296, 70%, 50%)",
      "hsl(97, 70%, 50%)",
      "hsl(340, 70%, 50%)",
    ],
  },
  {
    label: "AD",
    data: [32, 42, 15, 40, 20, 95, 32, 42, 15, 40, 20, 95],
    borderColor: [
      "hsl(229, 70%, 50%)",
      "hsl(296, 70%, 50%)",
      "hsl(97, 70%, 50%)",
      "hsl(340, 70%, 50%)",
    ],
    bgColor: [
      "hsl(229, 70%, 50%)",
      "hsl(296, 70%, 50%)",
      "hsl(97, 70%, 50%)",
      "hsl(340, 70%, 50%)",
    ],
  },
];

export const barData = {
  labels: mockData[0]?.labels?.map((label) => label),
  datasets: [
    {
      fill: true,
      label: "Test data",
      data: mockData[0].data?.map((data) => data),
      borderColor: mockData[0].borderColor?.map((color) => color),
      backgroundColor: mockData[0].bgColor?.map((color) => color),
      opacity: 1,
      borderWidth: 1,
    },
  ],
};
