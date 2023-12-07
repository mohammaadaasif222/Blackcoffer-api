import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const BarChartComponent = ({ entries }) => {
  const data = entries?.reduce((count, entry) => {
    const key = `${entry.country}-${entry.region}-${entry.topic}`;
    count[key] = (count[key] || 0) + 1;
    return count;
  }, {});

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={entries?.slice(0,8)}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="relevance" fill="#beb9db" />
        <Bar dataKey="likelihood" fill="#fdcce5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
