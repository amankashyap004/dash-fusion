import React from "react";

import DashboardStats from "./DashboardStats";
import NetProfit from "./NetProfit";
import ActivityGraph from "./ActivityGraph";
import DashboardSummary from "./DashboardSummary";
import RecentOrders from "./RecentOrders";
import CustomersFeedback from "./CustomersFeedback";

const DashboardHome: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 lg:gap-8 w-full">
      <div>
        <p className="text-xl lg:text-2xl font-semibold">Dashboard</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-8 w-full h-full">
        <section className="col-span-1 lg:col-span-5">
          <DashboardStats />
        </section>
        <section className="col-span-1 lg:col-span-2">
          <NetProfit />
        </section>
        <section className="col-span-1 lg:col-span-5">
          <ActivityGraph height="lg:h-72" />
        </section>
        <section className="col-span-1 lg:col-span-2">
          <DashboardSummary />
        </section>
        <section className="col-span-1 lg:col-span-5">
          <RecentOrders />
        </section>
        <section className="col-span-1 lg:col-span-2">
          <CustomersFeedback />
        </section>
      </div>
    </div>
  );
};

export default DashboardHome;
