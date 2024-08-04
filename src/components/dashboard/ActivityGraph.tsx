import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const dayData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Activity",
      data: [10, 20, 15, 25, 30, 20, 15],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const weekData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Activity",
      data: [100, 200, 150, 250],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const monthData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Activity",
      data: [300, 500, 400, 600, 700, 500, 600],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const ActivityGraph: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>("day");

  const getData = () => {
    switch (timeRange) {
      case "day":
        return dayData;
      case "week":
        return weekData;
      case "month":
        return monthData;
      default:
        return dayData;
    }
  };

  return (
    <div className="flex flex-col w-full h-full gap-2 bg-gray-800 p-2 lg:p-4 rounded-lg shadow-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl lg:text-2xl font-bold">Activity</h2>
        <div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 px-4 py-2 border rounded-lg cursor-pointer"
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>
    <div className="lg:h-72">
    <Bar data={getData()} />
    </div>
    </div>
  );
};

export default ActivityGraph;
