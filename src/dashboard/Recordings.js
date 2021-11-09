import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

const Recordings = ({ data }) => {
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
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.time}</TableCell>
              <TableCell>{data.length}</TableCell>
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
