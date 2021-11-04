import { Button } from "@mui/material";
import React, { useState } from "react";
import AuthService from "../services/auth-service";
import { TextField, Grid } from "@mui/material";

const DeleteAccount = () => {
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AuthService.deleteAccount(password);
    if (res === true) {
      console.log("here");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <Button variant="outlined" color="error" size="large" type="submit">
            Delete Account
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DeleteAccount;
