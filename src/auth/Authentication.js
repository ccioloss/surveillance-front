import React from "react";
import { Button } from "@mui/material";
import Register from "./Register";
import Login from "./Login";

const Authentication = () => {
  const [page, setPage] = React.useState(true);
  return (
    <div>
      <Button
        onClick={() => {
          setPage(true);
        }}
      >
        Log In{" "}
      </Button>
      <Button
        onClick={() => {
          setPage(false);
        }}
      >
        Register{" "}
      </Button>
      {page && <Login />}
      {!page && <Register />}
    </div>
  );
};
export default Authentication;
