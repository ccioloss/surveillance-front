import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import AuthService from "../services/auth-service";
import AlertService from "../services/alert-service";

const PasswordSettings = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
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
      message: "password",
    }));

    // check if oldPassword is correct

    if (await AuthService.changePassword(newPassword)) {
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid container direction="column" spacing={2}>
        <AlertService data={status} />
        <Grid item xs={6}>
          <TextField
            label="Old Password"
            type={"password"}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="New Password"
            type={"password"}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" variant="outlined">
            Change Password
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PasswordSettings;
