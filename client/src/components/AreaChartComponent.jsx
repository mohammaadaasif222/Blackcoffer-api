import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = ({entries}) => {
 
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={entries?.slice(15, 25)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="intensity" fill="#8884d8" stroke="#8884d8" />
        <Area type="monotone" dataKey="likelihood" fill="#64C2A6" stroke="#8884d8" />
        <Area type="monotone" dataKey="relevance" fill="#288EEB" stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
