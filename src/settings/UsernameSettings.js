import React, { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import AuthService from "../services/auth-service";
import AlertService from "../services/alert-service";

const UsernameSetting = () => {
  const [newUsername, setNewUsername] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState({
    type: "",
    message: "",
    success: Boolean,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((state) => ({
      ...state,
      type: "change",
      message: "username",
    }));
    if (await AuthService.changeUsername(newUsername)) {
      setStatus((state) => ({
        ...state,
        success: false,
      }));
    } else {
      setStatus((state) => ({
        ...state,
        success: true,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <AlertService data={status} />
        <Grid item xs={6}>
          <TextField
            label="New Username"
            type={"text"}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" variant="outlined">
            Change Username
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UsernameSetting;
