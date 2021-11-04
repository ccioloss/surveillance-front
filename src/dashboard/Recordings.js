import React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

function createData(id, date, time, length) {
  return { id, date, time, length };
}

const rows = [
  createData(0, "16 Mar, 2019", "18:01:58", "17s"),
  createData(1, "16 Mar, 2019", "18:01:58", "17s"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Recordings() {
  return (
    <React.Fragment>
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
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more recordings
      </Link>
    </React.Fragment>
  );
}
