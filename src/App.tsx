import React from "react";
import Topbar from "./components/Appbars/Topbar";
import Story from "./UI/Homepage/Story/Story";
import Posts from "./UI/Homepage/Posts/Posts";
import Rightbar from "./components/Appbars/Rightbar";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <div className="max-w-screen-lg mx-auto px-2 lg:px-28 flex justify-center lg:grid grid-cols-12 lg:gap-x-5 pt-16">
        <div className="w-[400px] sm:w-[500px] lg:w-full lg:col-span-7 h-screen">
          <Story />
          <Posts />
        </div>
        <div className="hidden lg:block lg:col-span-5 bg-white h-screen mt-5 rounded p-3">
          <Rightbar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
