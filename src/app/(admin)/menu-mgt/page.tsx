"use client";

import React from "react";

type Subscription = {
  name: string;
  plan: string;
  status: string;
  startDate: string;
};

const subscriptions: Subscription[] = [
  { name: "Jacob Ramos", plan: "Basic", status: "Active", startDate: "Apr 2, 2024" },
  { name: "Cyrithia Young", plan: "Premium", status: "Active", startDate: "Mar 12, 2024" },
  { name: "Savannah Nguyen", plan: "Standard", status: "Active", startDate: "Feb 26, 2024" },
  { name: "Liam James", plan: "Standard", status: "Active", startDate: "Feb 5, 2024" },
  { name: "Barbara Ford", plan: "Active", status: "Active", startDate: "Jan 19, 2025" },
  { name: "Barbara Ford", plan: "Active", status: "Active", startDate: "Jan 19, 2025" },
  { name: "Barbara Ford", plan: "Active", status: "Active", startDate: "Jan 19, 2025" },
  { name: "Barbara Ford", plan: "Active", status: "Active", startDate: "Jan 19, 2025" },
];

const Page = () => {
  return (
    <div className="p-4 w-full bg-white rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
          Active
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium border">
          Active Trials
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium border">
          Expired
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium border">
          Cancelled
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg max-w-4xl md:min-w-[530px] border border-gray-200">
        <table className="w-full  text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-medium">User</th>
              <th className="px-4 py-2 font-medium">Subscription</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Start Date</th>
              <th className="px-4 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{sub.name}</td>
                <td className="px-4 py-2">{sub.plan}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                    {sub.status}
                  </span>
                </td>
                <td className="px-4 py-2">{sub.startDate}</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
