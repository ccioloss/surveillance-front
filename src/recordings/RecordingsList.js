import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import Recording from "./Recording";
import { Pagination } from "@mui/material";
import DataService from "../services/data-service";

const RecordingsList = () => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [load, setLoad] = useState(false);
  const ws = useRef(null);

  const handleDelete = async (id) => {
    const res = await DataService.deleteRecording(id);
    if (res === true) {
      getPageData();
    }
  };

  const getPageData = async () => {
    const res = await DataService.getRecordingList(currentPage);
    setPages(res.totalPages);
    setPageData([...res.data]);
  };

  useEffect(() => {
    ws.current = new WebSocket(
      `ws://46.101.243.193:8080/?token=${localStorage
        .getItem("token")
        .replace(/['"]+/g, "")}`
    );
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.type) {
        setLoad(true);
      }
    };
  });

  useEffect(() => {
    getPageData();
  }, [currentPage, load]);

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
              id={recording.id}
              handleDelete={handleDelete}
            />
          );
        })}
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
        }}
      />
    </>
  );
};

export default RecordingsList;
