import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { changePassword } from "../requests/passwordChange";
import { changeUsername } from "../requests/usernameChange";

const Settings = () => {
  const [password1, setPassword1] = useState();
  const [newPassword, setNewPassword] = useState();

  const [password2, setPassword2] = useState();
  const [newUsername, setNewUsername] = useState();

  const handleUsernameChange = (e) => {
    e.preventDefault();
    changeUsername({ newusername: newUsername });
  };

  const handlePassChange = (e) => {
    e.preventDefault();
    changePassword({ newpassword: newPassword });
  };

  //   direction={"column"}
  // justify={"center"}
  // alignItems={"center"}

  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={3}>
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
          <Button type="submit" onClick={(e) => handlePassChange(e)}>
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
          <Button type="submit" onClick={(e) => handleUsernameChange(e)}>
            Change Username
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
