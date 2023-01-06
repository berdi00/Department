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
import Admin from "./routeComponents/Admin";
import AdminLayout from "./components/UI/AdminLayout";
function App() {
  return (
    <CustomContextProvider>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="schedules" element={<Admin />}>
            <Route path=":gradeId" element={<Schedule role="admin" />} />
          </Route>
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/majors" element={<Majors />}>
            <Route path=":gradeId" element={<Schedule />} />
          </Route>
        </Route>

        <Route path="/resources" element={<Resources />} />
      </Routes>
    </CustomContextProvider>
  );
}

export default App;
