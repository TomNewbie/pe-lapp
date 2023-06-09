import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const dataSubmit = (submit, notSubmit, late, label1, label2, label3) => {
  return {
    labels: [label1, label2, label3],
    datasets: [
      {
        label: "Number",
        data: [submit, notSubmit, late],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
};
