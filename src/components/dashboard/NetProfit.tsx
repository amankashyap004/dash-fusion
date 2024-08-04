import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import CircularProgressBar from "../ui/CircularProgressBar";

const NetProfit: React.FC = () => {
  const [isProfit, setIsProfit] = useState("");
  return (
    <div className="flex h-full gap-2 bg-gray-800 p-2 lg:p-4 rounded-lg shadow-md ">
      <section className="flex flex-col justify-between items-start h-full">
        <p className="text-lg font-semibold opacity-80 ">Net Profit</p>
        <p className="text-2xl lg:text-4xl font-semibold">$6012.89</p>
        {isProfit ? (
          <div className="flex justify-center items-center text-green-500">
            <IoMdArrowDropup size={28} />
            <p className=" font-semibold">5%</p>
          </div>
        ) : (
          <div className="flex justify-center items-center text-red-500">
            <IoMdArrowDropdown size={28} />
            <p className=" font-semibold">4%</p>
          </div>
        )}
      </section>
      <section className="flex flex-col justify-between items-center gap-4 w-full h-full">
        <div className="flex justify-center items-center w-full">
          <CircularProgressBar progress={75} size={90} strokeWidth={10} />
        </div>
        <p className="text-xs opacity-80 text-center">
          The value here is rounded.
        </p>
      </section>
    </div>
  );
};

export default NetProfit;



