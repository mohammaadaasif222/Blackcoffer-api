import React from "react";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";
import ScatterChartComponent from "./ScatterChartComponent";
import AreaChartComponent from "./AreaChartComponent";
import RadarChartComponent from './RadarChartComponent'

const ProfileLayout = ({ children, entries, show }) => {
  return (
    <div className="rounded-lg dark:border-gray-700">
    
      <div className="p-3 items-center justify-center mb-4 rounded bg-white border dark:bg-gray-800 text-xs">
          <AreaChartComponent entries={entries} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4 mb-4 ">
        <div className="flex items-center justify-center h-full rounded bg-white border p-3 text-xs dark:bg-gray-800">
        <LineChartComponent entries={entries} />
          {/* <RadarChartComponent entries={entries}/> */}
        </div>
        <div className="flex items-center justify-center h-full rounded bg-white border p-3 text-xs dark:bg-gray-800">
          <PieChartComponent entries={entries} />
        </div>
      </div>
      <div className="p-3 items-center justify-center mb-4 rounded bg-white border  dark:bg-gray-800 text-xs">
        {children}
      </div>
     
    </div>
  );
};

export default ProfileLayout;
