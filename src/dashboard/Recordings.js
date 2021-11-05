import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import AuthService from "../services/data-service";
import { useState } from "react";

const createData = (id, date, time, length) => {
  return { id, date, time, length };
};

let rows = [
  createData(0, "2021-11-04", "18:01:58", "5s"),
  createData(1, "2021-11-04", "18:03:45", "5s"),
];

const Recordings = () => {
  // TO DO: fetch recordings list
  // use momentjs to parse times

  // useEffect(async () => {
  //   const res = await AuthService.getRecordingList();
  //   rows = res.data.map((obj) =>
  //     createData(
  //       obj.id,
  //       Date.parse(obj.timestamp).format("YYYY-MM-DD"),
  //       Date.parse(obj.timestamp).format("YYYY-MM-DD").toHHMMSS(),
  //       "5s"
  //     )
  //   );
  //   console.log(rows);
  // });

  return (
    <>
      <Title>Recent Recordings</Title>
      <Table size="small">
        <TableHead>
          <TableRow key={0}>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="recordings" sx={{ mt: 3 }}>
        See more recordings
      </Link>
    </>
  );
};

export default Recordings;
