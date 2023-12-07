import React, { useState, useEffect, Suspense } from "react";
import ProfileLayout from "../components/ProfileLayout";
import BarChartComponent from "../components/BarChartComponent";
import { data } from "autoprefixer";

import Header from "./Header";

const Main = () => {
  const [entries, setEntries] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://blackcoffer-alemeno.onrender.com/api/entries"
    );
    const data = await response.json();
    setEntries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-3/4 px-5 pt-3" style={{width:'80%'}}>
      <Header />
      <div className="main mr-5 rounded-md w-full  my-20 ">
        <ProfileLayout entries={entries}>
          <BarChartComponent entries={entries} />
        </ProfileLayout>
      </div>
    </div>
  );
};

export default Main;
