import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { padding } from "@mui/system";

const Settings = () => {
  const [password1, setPassword1] = useState();
  const [newPassword, setNewPassword] = useState();

  const [password2, setPassword2] = useState();
  const [newUsername, setNewUsername] = useState();

  return (
    <div style={{ padding: 30 }}>
      <Grid
        container
        spacing={3}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <TextField
            label="Old Password"
            type={"password"}
            onChange={(e) => setPassword1(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="New Password"
            type={"password"}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit">
            Change Password
          </Button>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="New Username"
            type={"password"}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type={"password"}
            onChange={(e) => setPassword2(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit">
            Change Username
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
