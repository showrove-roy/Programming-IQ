import React from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const satistics = useLoaderData();
  return (
    <div className='flex justify-center md:mt-10 mt-5'>
      <BarChart
        className='h-40 w-40'
        height={350}
        width={300}
        data={satistics.data}>
        <YAxis />
        <XAxis dataKey='name' />
        <Tooltip></Tooltip>
        <Bar dataKey='total' fill='#8884d8'></Bar>
      </BarChart>
    </div>
  );
};

export default Statistics;
