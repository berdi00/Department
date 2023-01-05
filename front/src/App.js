import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CustomContextProvider from "./context/CustomContext";
import Home from "./routeComponents/Home";
import Teachers from "./routeComponents/Teachers";
import Majors from "./routeComponents/Majors";
import Resources from "./routeComponents/Resources";
import Schedule from "./components/Schedule";
import Layout from "./routeComponents/Layout";
// import Test from "./components/Test";
import Admin from "./routeComponents/Admin";
function App() {
  return (
    <CustomContextProvider>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/majors" element={<Majors />}>
            <Route path=":gradeId" element={<Schedule />} />
          </Route>
        </Route>

        <Route path="resources/" element={<Resources />} />
      </Routes>
    </CustomContextProvider>
  );
}

export default App;
