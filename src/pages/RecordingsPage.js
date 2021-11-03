import React from "react";
import Main from "./Main";
import RecordingsList from "../recordings/RecordingsList";

const RecordingsPage = () => {
  return <Main subpageContent={<RecordingsList />}></Main>;
};

export default RecordingsPage;
