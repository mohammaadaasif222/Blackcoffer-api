import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ScatterChartComponent = ({ entries }) => {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="region" name="Likelihood" />
        <YAxis type="number" dataKey="topic" name="Relevance" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Data" data={entries?.slice(0,20)} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartComponent;
