import React from "react";
import {  Users, AlertCircle, Calendar, DollarSign, UserPlus } from "lucide-react";

const data = {
  todaysOrders: 128,
  activeSubscriptions: 450,
  pendingIssues: 6,
  deliveryStatus: {
    delivered: 110,
    outForDelivery: 15,
    delayed: 3,
  },
  revenueToday: 6500,
  revenueMonth: 124000,
  newUsersToday: 12,
};

const StatCard = ({Icon, title, value}: { Icon: React.ElementType, title: string, value: number | string }) => (
  <div className="flex flex-col justify-center h-44 items-center gap-4 p-4 bg-white rounded-xl shadow border">
    <Icon className="text-blue-500 w-6 h-6" />
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-semibold text-gray-800">{value}</div>
    </div>
  </div>
);

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <StatCard
        Icon={Calendar}
        title="Today's Orders"
        value={data.todaysOrders}
      />
      <StatCard
        Icon={Users}
        title="Active Subscriptions"
        value={data.activeSubscriptions}
      />
      <StatCard
        Icon={AlertCircle}
        title="Pending Issues"
        value={data.pendingIssues}
      />
      <div className="p-4 bg-white rounded-xl shadow border">
        <div className="text-sm text-gray-500 mb-2 font-medium">Delivery Status</div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Delivered</span>
            <span>{data.deliveryStatus.delivered}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Out for Delivery</span>
            <span>{data.deliveryStatus.outForDelivery}</span>
          </div>
          <div className="flex justify-between text-sm text-red-500">
            <span>Delayed</span>
            <span>{data.deliveryStatus.delayed}</span>
          </div>
        </div>
      </div>
      <StatCard
        Icon={DollarSign}
        title="Revenue Today"
        value={`₹${data.revenueToday}`}
      />
      <StatCard
        Icon={DollarSign}
        title="Revenue This Month"
        value={`₹${data.revenueMonth}`}
      />
      <StatCard
        Icon={UserPlus}
        title="New Users Today"
        value={data.newUsersToday}
      />
    </div>
  );
}
