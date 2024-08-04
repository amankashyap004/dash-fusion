"use client";

import React, { useState } from "react";
import { IoMdHome, IoMdWallet, IoMdLogOut } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { AiFillCarryOut } from "react-icons/ai";

import DashboardHome from "./DashboardHome";

const tabs = [
  { icon: <IoMdHome />, label: "Home", content: <DashboardHome /> },
  {
    icon: <VscGraph />,
    label: "Graph",
    content: "Graph page update coming soon..",
  },
  {
    icon: <AiFillCarryOut />,
    label: "Carry Out",
    content: "Page update coming soon..",
  },
  {
    icon: <IoMdWallet />,
    label: "Wallet",
    content: "Wallet page update coming soon..",
  },
  {
    icon: <GiShoppingBag />,
    label: "Cart",
    content: "Cart page update coming soon..",
  },
];

const Dashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  const renderContent = () => {
    const tab = tabs.find((tab) => tab.label === selectedTab);
    return tab ? <div>{tab.content}</div> : <DashboardHome />;
  };

  return (
    <div className="relative lg:flex lg:justify-start lg:items-start w-full gap-4 h-screen">
      <section className="fixed bottom-0 lg:left-0 flex flex-row lg:flex-col justify-start items-start gap-4 lg:pt-24 w-full lg:w-20 lg:h-full bg-gray-900">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            onClick={() => setSelectedTab(tab.label)}
            className={`flex justify-center items-center cursor-pointer w-full py-4 lg:py-0 border-b-2 lg:border-b-0 lg:border-s-2  ${
              selectedTab === tab.label
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-400"
            }`}
          >
            <p className="text-3xl text-center">{tab.icon}</p>
          </div>
        ))}
        <div className="hidden lg:flex justify-center items-end cursor-pointer w-full h-full">
          <p className="text-gray-400 hover:text-red-600 text-3xl text-center py-8">
            <IoMdLogOut />
          </p>
        </div>
      </section>
      <section className="w-full py-24 lg:ps-28 px-4 overflow-y-scroll">
        {renderContent()}
      </section>
    </div>
  );
};

export default Dashboard;
