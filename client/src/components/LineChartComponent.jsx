import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ entries }) => {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={entries?.slice(20,40)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="intensity" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="relevance" stroke="#96EFFF" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="likelihood" stroke="#5FBDFF" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
