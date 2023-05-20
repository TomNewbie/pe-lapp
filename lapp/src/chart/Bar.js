// components/BarChart.js
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }} className="text-3xl">
        Bar Chart
      </h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            scales: {
              y: {
                type: "linear",
                min: 0,
                max: 100,
              },
            },
          },
        }}
      />
    </div>
  );
};
