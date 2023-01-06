import React from "react";
import MajorsSection from "../components/MajorsSection";
import Intro from "../components/Intro";
import { getFromLocalStorage } from "../utils/useCustomFunctions";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #141b29, #124143, #c0f7b7, #5ac994)",
        }}
      >
        <Intro />
      </div>
      <MajorsSection />
    </>
  );
};

export default Home;
