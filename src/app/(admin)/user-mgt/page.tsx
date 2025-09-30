"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type Subscription = {
  userName: string;
  email: string;
  phoneNumber?: string;
  subscriptionPlan: string[] | string;
  isSubscribed: boolean | string;
  subscribedAt: string | Date | null;
};

type CurrentStateProp = true | false | "all";

const subscriptions = [
  {
    userName: "JohnDoe",
    email: "john.doe@example.com",
    phoneNumber: "9876543210",
    subscriptionPlan: "Pro",
    isSubscribed: true,
    subscribedAt: "2024-05-12",
  },
  {
    userName: "JaneSmith",
    email: "jane.smith@example.com",
    phoneNumber: "9123456789",
    subscriptionPlan: "Basic",
    isSubscribed: false,
    subscribedAt: "2023-11-30",
  },
  {
    userName: "AlexJones",
    email: "alex.jones@example.com",
    phoneNumber: "9988776655",
    subscriptionPlan: "Enterprise",
    isSubscribed: true,
    subscribedAt: "2025-01-15",
  },
  {
    userName: "EmilyStone",
    email: "emily.stone@example.com",
    phoneNumber: "9090909090",
    subscriptionPlan: "Pro",
    isSubscribed: false,
    subscribedAt: "2025-04-10",
  },
  {
    userName: "MikeBrown",
    email: "mike.brown@example.com",
    phoneNumber: "8001234567",
    subscriptionPlan: "Basic",
    isSubscribed: true,
    subscribedAt: "2024-07-22",
  },
  {
    userName: "SaraLee",
    email: "sara.lee@example.com",
    phoneNumber: "8223344556",
    subscriptionPlan: "Enterprise",
    isSubscribed: true,
    subscribedAt: "2024-10-01",
  },
  {
    userName: "TomClark",
    email: "tom.clark@example.com",
    phoneNumber: "8899776655",
    subscriptionPlan: "Pro",
    isSubscribed: false,
    subscribedAt: "2023-09-18",
  },
  {
    userName: "LindaMiller",
    email: "linda.miller@example.com",
    phoneNumber: "9112233445",
    subscriptionPlan: "Basic",
    isSubscribed: true,
    subscribedAt: "2025-02-05",
  },
  {
    userName: "ChrisEvans",
    email: "chris.evans@example.com",
    phoneNumber: "9556677880",
    subscriptionPlan: "Pro",
    isSubscribed: true,
    subscribedAt: "2025-04-01",
  },
  {
    userName: "NancyWhite",
    email: "nancy.white@example.com",
    phoneNumber: "8005551212",
    subscriptionPlan: "Enterprise",
    isSubscribed: false,
    subscribedAt: "2024-01-20",
  },
  {
    userName: "SteveGrant",
    email: "steve.grant@example.com",
    phoneNumber: "7001234567",
    subscriptionPlan: "Pro",
    isSubscribed: true,
    subscribedAt: "2024-08-14",
  },
  {
    userName: "OliviaTurner",
    email: "olivia.turner@example.com",
    phoneNumber: "9667788990",
    subscriptionPlan: "Basic",
    isSubscribed: false,
    subscribedAt: "2023-10-05",
  },
  {
    userName: "DavidKing",
    email: "david.king@example.com",
    phoneNumber: "8080808080",
    subscriptionPlan: "Enterprise",
    isSubscribed: true,
    subscribedAt: "2025-03-12",
  },
  {
    userName: "SophiaHill",
    email: "sophia.hill@example.com",
    phoneNumber: "9099223344",
    subscriptionPlan: "Pro",
    isSubscribed: true,
    subscribedAt: "2024-11-28",
  },
  {
    userName: "BrianScott",
    email: "brian.scott@example.com",
    phoneNumber: "8777665544",
    subscriptionPlan: "Basic",
    isSubscribed: false,
    subscribedAt: "2023-12-19",
  },
];

const Page = () => {
  const [rawData, setRawData] = useState<Subscription[]>([]);
  const [filterData, setFilterData] = useState<Subscription[]>();
  const [currentState, setCurrentState] = useState<CurrentStateProp>(true);

  const handlefilter = () => {
    let data;
    if (currentState === true || currentState === false) {
      data = subscriptions
        .filter((e) => e.isSubscribed == currentState)
        .sort((a, b) => {
          const nameA = a.userName || "";
          const nameB = b.userName || "";
          return nameA.localeCompare(nameB);
        });
    } else {
      data = subscriptions.sort((a, b) => {
        const nameA = a.userName || "";
        const nameB = b.userName || "";
        return nameA.localeCompare(nameB);
      });
    }
    if(data.length === 0 ) {
      setFilterData([{
        userName: "---",
        email: "---",
        phoneNumber: "---",
        subscriptionPlan: "--",
        isSubscribed: '---',
        subscribedAt: "---",
      }]);
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
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 text-black font-medium tracking-wider">
      <button
          onClick={() => setCurrentState("all")}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === "all" && "bg-blue-600 text-white"
          }`}
        >
          All Users
        </button>
        <button
          onClick={() => setCurrentState(true)}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === true && "bg-blue-600 text-white"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setCurrentState(false)}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${
            currentState === false && "bg-blue-600 text-white"
          }`}
        >
          Unactive
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
              <th className="px-4 py-2 font-medium">Subscription Plan</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Start Date</th>
              {/* <th className="px-4 py-2 font-medium">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filterData &&
              filterData.map((sub, idx) => (
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
                      {sub.subscriptionPlan || "No Plan"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {sub.isSubscribed == true ? "Active" : "Unactive"}
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
