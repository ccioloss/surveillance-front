import React, { useState } from "react";
import { Button } from "@mui/material";
import Register from "./Register";
import Login from "./Login";

const Authentication = ({ setToken }) => {
  const [page, setPage] = useState(true);

  const changePage = () => {
    setPage(!page);
  };

  return (
    <div>
      <Button onClick={changePage}>Log In </Button>
      <Button onClick={changePage}>Register</Button>
      {page ? <Login setToken={setToken} /> : <Register />}
    </div>
  );
};
export default Authentication;
