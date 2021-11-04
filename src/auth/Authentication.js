import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Register from "./Register";
import Login from "./Login";
import { transform } from "@babel/core";

const Authentication = ({ setToken }) => {
  const [page, setPage] = useState(true);

  const logIn = () => {
    setPage(true);
  };
  const register = () => {
    setPage(false);
  };

  return (
    <div
      style={{
        padding: 30,
        width: "50%",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Button onClick={logIn}>Log in</Button>
          <Button onClick={register}>Register</Button>
        </Grid>
      </Grid>
      {page ? <Login setToken={setToken} /> : <Register />}
    </div>
  );
};
export default Authentication;
