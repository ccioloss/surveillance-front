import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Recording from "./Recording";
import { Pagination } from "@mui/material";
import DataService from "../services/data-service";

const RecordingsList = () => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const getPageData = async () => {
    const res = await DataService.getRecordingList(currentPage);
    setPages(res.totalPages);
    setPageData([...res.data]);
  };

  useEffect(() => {
    getPageData();
  }, [currentPage]);

  return (
    <>
      <Grid container padding={2}>
        {pageData.map((recording) => {
          return (
            <Recording
              url={recording.presignedUrl}
              timestamp={recording.timestamp}
              name={"Recording " + recording.id}
              key={recording.id}
            />
          );
        })}
        {/* <Grid
        item
        xs={6}
        style={{ backgroundColor: "blue", height: "250px" }}
      ></Grid>
      <Grid
        item
        xs={6}
        style={{ backgroundColor: "grey", height: "250px" }}
      ></Grid> */}
      </Grid>
      <Pagination
        count={pages}
        sx={{
          justifyContent: "center",
          display: "flex",
          padding: 5,
        }}
        onChange={(e, page) => {
          setCurrentPage(page);
          console.log(currentPage);
        }}
      />
    </>
  );
};

export default RecordingsList;
