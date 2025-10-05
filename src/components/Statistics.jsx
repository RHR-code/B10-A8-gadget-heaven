import { Area, BarChart, ComposedChart, Scatter } from "recharts";
import React from "react";
import { useLoaderData, useLocation } from "react-router";
import { Bar, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const user = useLoaderData();
  console.log("users", user);

  return (
    <div className="max-w-[1600px] mx-auto ">
      <div className=" bg-[#9538E2] text-center text-white mb-10 ">
        <h1 className="text-3xl font-bold mb-5 pt-8">Statistics</h1>
        <p className="max-w-[796px] mx-auto pb-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto bg-white p-5 ">
        <div>
          <h1 className="text-xl font-bold  ">Statistics</h1>
        </div>
        <div>
          <ComposedChart width={1200} height={500} data={user}>
            <XAxis dataKey="product_title" stroke="" />
            <YAxis />
            <Bar dataKey="price" fill="#9538E2" />
            <Area
              type="monotone"
              dataKey="price"
              fill="#9538e254"
              stroke="#8884d8"
            />
            <Scatter dataKey="rating" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
