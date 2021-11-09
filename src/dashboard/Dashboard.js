import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import DataService from "../services/data-service";
import Recordings from "./Recordings";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <b>Surveillance System</b> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function createChartData(date, amount) {
  return {
    name: date,
    recordings: amount,
  };
}

function createRecordingsData(id, date, time, length) {
  return { id, date, time, length };
}

const Dashboard = () => {
  const [data, setData] = useState({
    chart: [],
    recs: 0,
    recordings: [],
  });

  useEffect(() => {
    getData();
  }, [data.recs]);

  function last7Days() {
    var result = [];
    for (var i = 6; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(
        createChartData(d.getDate() + " " + monthNames[d.getMonth()], 0)
      );
    }
    return result;
  }

  function prepareChartData(response) {
    let temp = last7Days();
    let data = [{ chart: [], recs: 0, recordings: [] }];
    for (let key of Object.keys(response)) {
      if (key !== "allEntries") {
        let date = new Date(key);
        for (let k = 0; k < 7; k++) {
          if (
            temp[k].name ===
            date.getDate() + " " + monthNames[date.getMonth()]
          ) {
            temp[k].recordings = response[key];
          }
        }
      } else {
        if (response[key] !== data.recs) {
          data.chart = temp;
          data.recs = response[key];
        }
      }
    }
    return data;
  }

  function prepareRecordingsData(response) {
    let temp = [];
    for (let k = 0; k < response.data.length; k++) {
      let date = new Date(response.data[k].timestamp);
      temp.push(
        createRecordingsData(
          k,
          date.toLocaleDateString(),
          date.toLocaleTimeString(),
          "5s"
        )
      );
    }
    return temp;
  }

  const getData = async () => {
    let response = await DataService.getChartData();
    let data = prepareChartData(response);
    response = await DataService.getLatestRecordings();
    console.log(response);
    let recordings = prepareRecordingsData(response);
    data.recordings = recordings;
    setData((state) => ({
      ...state,
      chart: data.chart,
      recs: data.recs,
      recordings: data.recordings,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart data={data.chart} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Typography variant="h5" color="gray">
              Total recordings:
            </Typography>
            <Typography variant="h1" color="blue">
              {data.recs}
            </Typography>
          </Paper>
        </Grid>
        {/* Recent Recordings */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Recordings data={data.recordings} />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default Dashboard;
