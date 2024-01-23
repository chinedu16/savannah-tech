import React from "react";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Transactions",
      data: labels.map(() => [1000, 4000, 10000, 8000, 2000, 5000, 20000]),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    
  ],
};
const PieChart: React.FC = () => {
 

  return (
    <div>
      <div className="">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div>
          <h3 className="text-gray-500">Your Balance</h3>
          <h5 className="text-3xl font-bold ">₦120,543.43</h5>
          </div>
          <div className="space-y-2 mt-4">
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PieChart;
