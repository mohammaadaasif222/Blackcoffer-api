import React from "react";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="flex">
      <SideBar />
      <Main />
      </div>
    </>
  );
};

export default App;
