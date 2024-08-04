import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface Order {
  customerName: string;
  orderNumber: string;
  amount: string;
  status: "Delivered" | "Canceled" | "Pending";
}

const orders: Order[] = [
  {
    customerName: "John Doe",
    orderNumber: "ORD12345",
    amount: "$120.00",
    status: "Delivered",
  },
  {
    customerName: "Jane Smith",
    orderNumber: "ORD12346",
    amount: "$90.00",
    status: "Pending",
  },
  {
    customerName: "Alice Johnson",
    orderNumber: "ORD12347",
    amount: "$150.00",
    status: "Canceled",
  },
  {
    customerName: "Robert Brown",
    orderNumber: "ORD12348",
    amount: "$80.00",
    status: "Delivered",
  },
];

const statusColors: { [key in Order["status"]]: string } = {
  Delivered: "bg-green-200 text-green-800",
  Canceled: "bg-red-200 text-red-800",
  Pending: "bg-yellow-200 text-yellow-800",
};

const RecentOrders: React.FC = () => {
  return (
    <div className="flex flex-col h-full gap-2 bg-gray-800 p-2 lg:p-4 rounded-lg shadow-md overflow-x-scroll lg:overflow-auto">
      <h2 className="text-xl font-bold">Recent Orders</h2>
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-b border-gray-600 border-opacity-40">
              Customer
            </th>
            <th className="py-2 px-4 border-b border-gray-600 border-opacity-40">
              Order No.
            </th>
            <th className="py-2 px-4 border-b border-gray-600 border-opacity-40">
              Amount
            </th>
            <th className="py-2 px-4 border-b border-gray-600 border-opacity-40">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          {orders.map((order, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b border-gray-600 border-opacity-40 flex items-center gap-2 text-nowrap">
                <FaUserCircle className="text-2xl text-gray-600" />
                {order.customerName}
              </td>
              <td className="py-2 px-4 border-b border-gray-600 border-opacity-40">
                {order.orderNumber}
              </td>
              <td className="py-2 px-4 border-b border-gray-600 border-opacity-40">
                {order.amount}
              </td>
              <td className="py-1 px-4 border-b border-gray-600 border-opacity-40">
                <span
                  className={`px-4 py-1 rounded-full text-sm  ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
