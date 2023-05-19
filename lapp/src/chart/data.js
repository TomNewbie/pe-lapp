import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataSubmit = (submit, notSubmit, late) => {
  console.log(submit);
  console.log("awqeqwewqe");
  return {
    labels: ["Submit", "Not Submit", "Late"],
    datasets: [
      {
        label: "Submission",
        data: [submit, notSubmit, late],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
    options: {
      animateRotate: false,
    },
  };
};
