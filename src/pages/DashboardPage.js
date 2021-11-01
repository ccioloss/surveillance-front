import React, { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Main from "./Main";

const DashboardPage = () => {
  return <Main subpageContent={<Dashboard />}></Main>;
};

export default DashboardPage;
