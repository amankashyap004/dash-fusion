import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { GiFullWoodBucket } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";

interface Stat {
  id: number;
  title: string;
  value: number | string;
  icon: React.ReactNode;
  bgIconColor: string;
  isProfit: boolean;
  change: number;
}

const stats: Stat[] = [
  {
    id: 1,
    title: "Total Orders",
    value: 75,
    icon: <GiFullWoodBucket />,
    bgIconColor: "bg-indigo-600",
    isProfit: false,
    change: 3,
  },
  {
    id: 2,
    title: "Total Delivered",
    value: 65,
    icon: <HiShoppingBag />,
    bgIconColor: "bg-green-600",
    isProfit: true,
    change: 5,
  },
  {
    id: 3,
    title: "Total Cancelled",
    value: 10,
    icon: <HiShoppingBag />,
    bgIconColor: "bg-red-600",
    isProfit: false,
    change: 2,
  },
  {
    id: 4,
    title: "Total Revenue",
    value: "$500K",
    icon: <FaMoneyBillTrendUp />,
    bgIconColor: "bg-pink-600",
    isProfit: true,
    change: 10,
  },
];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col gap-2 bg-gray-800 p-2 lg:p-4 rounded-lg shadow-md"
        >
          <div className="flex flex-col justify-start items-start gap-2">
            <div
              className={`p-3 rounded-lg text-3xl lg:text-4xl opacity-50 ${stat.bgIconColor}`}
            >
              {stat.icon}
            </div>
            <p className="text-sm font-semibold opacity-80">{stat.title}</p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-xl lg:text-4xl font-bold">{stat.value}</p>
            {stat.isProfit ? (
              <div className="flex justify-center items-center text-green-500">
                <IoMdArrowDropup size={28} />
                <p className=" font-semibold">{stat.change}%</p>
              </div>
            ) : (
              <div className="flex justify-center items-center text-red-500">
                <IoMdArrowDropdown size={28} />
                <p className=" font-semibold">{stat.change}%</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
