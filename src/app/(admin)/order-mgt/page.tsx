"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type Subscription = {
  userName: string;
  email: string;
  phoneNumber?: string;
  preference: string;
  plan: string;
  subscriptionPlan: string[] | string;
  isSubscribed: boolean | string;
  subscribedAt: string | Date | null;
  isPaymentVerified: boolean
};

type CurrentStateProp = 'Veg' | 'Non-Veg' | "Mix" | 'all';

const tableData = [
  {
    userName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "9876543210",
    preference: "Veg",
    plan: "Pro",
    subscriptionPlan: ["Lunch", "Dinner"],
    isSubscribed: true,
    subscribedAt: "2024-05-01",
    isPaymentVerified: true,
  },
  {
    userName: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "9123456789",
    preference: "Non-Veg",
    plan: "Basic",
    subscriptionPlan: "Lunch",
    isSubscribed: false,
    subscribedAt: null,
    isPaymentVerified: false,
  },
  {
    userName: "Alex Johnson",
    email: "alex.j@example.com",
    phoneNumber: "9988776655",
    preference: "Mix",
    plan: "Enterprise",
    subscriptionPlan: ["Breakfast", "Lunch", "Dinner"],
    isSubscribed: true,
    subscribedAt: new Date("2024-03-20"),
    isPaymentVerified: true,
  },
  {
    userName: "Emily Stone",
    email: "emily.stone@example.com",
    phoneNumber: "9090909090",
    preference: "Veg",
    plan: "Pro",
    subscriptionPlan: "Dinner",
    isSubscribed: "true",
    subscribedAt: "2024-02-10",
    isPaymentVerified: true,
  },
  {
    userName: "Mike Brown",
    email: "mike.brown@example.com",
    phoneNumber: "8001234567",
    preference: "Non-Veg",
    plan: "Basic",
    subscriptionPlan: ["Lunch"],
    isSubscribed: "false",
    subscribedAt: null,
    isPaymentVerified: false,
  },
  {
    userName: "Nina Patel",
    email: "nina.patel@example.com",
    phoneNumber: "9823012345",
    preference: "Mix",
    plan: "Basic",
    subscriptionPlan: ["Breakfast", "Lunch"],
    isSubscribed: true,
    subscribedAt: "2025-01-10",
    isPaymentVerified: true,
  },
  {
    userName: "Ravi Kumar",
    email: "ravi.k@example.com",
    phoneNumber: "9012345678",
    preference: "Veg",
    plan: "Pro",
    subscriptionPlan: ["Lunch", "Dinner"],
    isSubscribed: true,
    subscribedAt: "2025-02-05",
    isPaymentVerified: true,
  },
  {
    userName: "Sana Iqbal",
    email: "sana.iqbal@example.com",
    phoneNumber: "8887766554",
    preference: "Non-Veg",
    plan: "Enterprise",
    subscriptionPlan: "Dinner",
    isSubscribed: false,
    subscribedAt: null,
    isPaymentVerified: false,
  },
  {
    userName: "David Lee",
    email: "david.lee@example.com",
    phoneNumber: "9873214560",
    preference: "Veg",
    plan: "Pro",
    subscriptionPlan: ["Lunch"],
    isSubscribed: true,
    subscribedAt: new Date("2024-12-25"),
    isPaymentVerified: true,
  },
  {
    userName: "Priya Singh",
    email: "priya.singh@example.com",
    phoneNumber: "8765432109",
    preference: "Mix",
    plan: "Basic",
    subscriptionPlan: "Breakfast",
    isSubscribed: true,
    subscribedAt: "2025-03-01",
    isPaymentVerified: false,
  },
];


const Page = () => {
  const [rawData, setRawData] = useState<Subscription[]>([]);
  const [filterData, setFilterData] = useState<Subscription[]>();
  const [currentState, setCurrentState] = useState<CurrentStateProp>('all');

  const handlefilter = () => {
    let data: Subscription[] = [];
    if(currentState !== 'all' ){
      data = tableData
        .filter((e) => e.preference == currentState)
        .sort((a, b) => {
          const nameA = a.userName || "";
          const nameB = b.userName || "";
          return nameA.localeCompare(nameB);
        });
    }
    if(currentState === 'all' ){
      data = tableData
        .sort((a, b) => {
          const nameA = a.userName || "";
          const nameB = b.userName || "";
          return nameA.localeCompare(nameB);
        });
    }
    
    if(data.length === 0 ) {
      setFilterData([]);
    }else {
      setFilterData(data);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/v1/users-details");
      console.log(res);
      if (res.data.statusCode === 200) {
        setRawData(res.data.data.allUsers);
      }
    };
    getData();
  }, []);
  console.log(rawData);

  useEffect(() => {
    // getData()
    handlefilter();
  }, [currentState]);

  return (
    <div className="p-4 w-full bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Order Management</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 text-black font-medium tracking-wider">
        <button
          onClick={() => setCurrentState('all')}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === 'all' && "bg-blue-600 text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCurrentState('Veg')}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === 'Veg' && "bg-blue-600 text-white"
          }`}
        >
          Veg
        </button>
        <button
          onClick={() => setCurrentState("Non-Veg")}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === "Non-Veg" && "bg-blue-600 text-white"
          }`}
        >
          Non-Veg
        </button>
        <button
          onClick={() => setCurrentState("Mix")}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === "Mix" && "bg-blue-600 text-white"
          }`}
        >
          Mix
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto scrollbar-custom rounded-lg max-w-5xl md:min-w-[500px] border border-gray-200">
        <table className="w-full overflow-x-auto scrollbar-custom text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-medium">UserName</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Phone No.</th>
              <th className="px-4 py-2 font-medium">Address</th>
              <th className="px-4 py-2 font-medium">Payment</th>
              <th className="px-4 py-2 font-medium">Preference</th>
              <th className="px-4 py-2 font-medium">Plan</th>
              <th className="px-4 py-2 font-medium">Start Date</th>
              {/* <th className="px-4 py-2 font-medium">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filterData && filterData.map((sub, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 h-10 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2">{sub.userName || "---"}</td>
                  <td className="px-4 py-2">{sub.email}</td>
                  <td className="px-4 py-2">
                    {sub.phoneNumber || "9876543210"}
                  </td>
                  <td className="px-4 py-2">{"Address"}</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                    {sub.isPaymentVerified == true ? "Verified" : "Not-Verified"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {sub.preference}
                  </td>
                  <td className="px-4 py-2">
                    {sub.plan}
                  </td>
                  <td className="px-4 py-2">
                    {/* <button className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300"> */}

                    {typeof sub.subscribedAt === "string"
                      ? sub.subscribedAt
                      : (sub.subscribedAt as Date)?.toLocaleDateString() ||
                        "---"}
                    {typeof sub.subscribedAt === null && "---"}
                    {/* </button> */}
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
