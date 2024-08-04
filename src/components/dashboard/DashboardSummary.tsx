import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { PiHamburgerFill } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

interface Item {
  icon: React.ReactNode;
  label: string;
  colors: string;
}

const summary: Item[] = [
  {
    label: "Goals",
    icon: <BiTargetLock />,
    colors: "bg-orange-300 text-orange-600",
  },
  {
    label: "Popular Dishes",
    icon: <PiHamburgerFill />,
    colors: "bg-blue-300 text-blue-600",
  },
  {
    label: "Menus",
    icon: <MdOutlineFoodBank />,
    colors: " bg-green-300 text-green-600",
  },
];

const DashboardSummary: React.FC = () => {
  return (
    <div className="flex h-full gap-2 bg-gray-800 p-2 lg:p-4 rounded-lg shadow-md ">
      <div className="flex flex-col justify-center items-start w-full gap-4">
        {summary.map((item, index) => (
          <div key={index} className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <div
                className={`text-2xl lg:text-6xl p-2 rounded-full ${item.colors}`}
              >
                {item.icon}
              </div>
              <p className="lg:text-xl font-semibold opacity-80">
                {item.label}
              </p>
            </div>
            <div className="flex justify-center items-center p-1 rounded-full text-xs cursor-pointer bg-gray-500">
              <FaChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSummary;
