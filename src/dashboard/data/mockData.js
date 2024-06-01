import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  RadialLinearScale,
  BarElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  RadialLinearScale,
  BarElement,
  ArcElement
);

const setGradientColor = (canvas, color) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.create;
};

export const Datasets = [
  {
    label: "React",
    data: [32, 42, 15, 40, 20, 95, 32, 42, 15, 40, 20, 95],
    backgroundColor: "#2196F3",
    borderColor: "#2196F3",
  },
  {
    label: "Angular",
    data: [37, 42, 41, 37, 31, 44],
    backgroundColor: "#F44236",
    borderColor: "#F44236",
  },
  {
    label: "Vue",
    data: [60, 54, 54, 28, 27, 49],
    backgroundColor: "#FFCA29",
    borderColor: "#FFCA29",
  },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Melody AI by Octave",
    },
  },
  maintainAspectRatio: false,
};

export const options2 = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Melody AI by Octave",
    },
  },
  maintainAspectRatio: false,
};

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: Datasets[0].data.map((data) => data),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.2)",
    },
  ],
};

export const dataLine = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: Datasets[0].data.map((data) => data),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.2)",
    },
  ],
};

export const dataPie = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      opacity: 2,
      fill: true,
      data: [12, 19, 3, 5, 2, 3],
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
    },
  ],
};

export const test = {
  type: "bar",
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {
    // labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        // data: data.map((row) => row.count),
      },
    ],
  },
};

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];
