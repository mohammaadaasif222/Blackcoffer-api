import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'English', A: 98, B: 130, fullMark: 150 },
  { subject: 'Science', A: 86, B: 130, fullMark: 150 },
  { subject: 'History', A: 99, B: 100, fullMark: 150 },
  { subject: 'Geography', A: 85, B: 90, fullMark: 150 },
  { subject: 'Art', A: 65, B: 85, fullMark: 150 },
];

const RadarChartComponent = ({entries}) => {
  console.log(entries);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={entries?.slice(0,6)}>
        <PolarGrid />
        <PolarAngleAxis dataKey="region" />
        <PolarRadiusAxis />
        <Radar name="Student A" dataKey="intensity" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Student B" dataKey="likelihood" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
