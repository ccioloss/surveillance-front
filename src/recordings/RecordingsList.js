import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Pagination,
  Card,
  Stack,
  CardActions,
  TextField,
  Button,
} from "@mui/material";
import Recording from "./Recording";
import DataService from "../services/data-service";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const RecordingsList = () => {
  const now = new Date().getTime();
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [load, setLoad] = useState(false);
  const [startDate, setStartDate] = useState(now - 24 * 60 * 60);
  const [endDate, setEndDate] = useState(now);
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

  const getFilteredData = async () => {
    const res = await DataService.filterRecordings(startDate, endDate);
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
        {/* Filter */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item xs={12} sm={6} md={4} padding={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <Stack spacing={2} paddingTop={3}>
                <DateTimePicker
                  label="Start date"
                  value={startDate}
                  onChange={(e) => setStartDate(new Date(e).getTime())}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DateTimePicker
                  label="End date"
                  value={endDate}
                  onChange={(e) => setEndDate(new Date(e).getTime())}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
              <CardActions
                style={{ width: "100%", justifyContent: "flex-end" }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  onClick={getFilteredData}
                >
                  Filter
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </LocalizationProvider>
        {/* Recordings */}
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
