import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Household", "Food", "Clothing", "Entertainment"],
  datasets: [
    {
      label: "# of Transactions",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const PieChart: React.FC = () => {
  //   const pallete = ["#AFE9C2", "#FFB26A", "#FBE77F", "#FFB26A"];

  return (
    <div>
      <div className="">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 font-semibold text-lg">Analytics</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_501_2128)">
                <path
                  d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="#84919A"
                />
              </g>
              <defs>
                <clipPath id="clip0_501_2128">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center items-center space-y-2 mt-4">
            <div className="w-full">
              {/* <Doughnut className="" data={data} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PieChart;
