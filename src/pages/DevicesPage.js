import React from "react";
import Device from "../devices/Device";
import Main from "./Main";

export const DevicesPage = () => {
  return <Main subpageContent={<Device />} />;
};
