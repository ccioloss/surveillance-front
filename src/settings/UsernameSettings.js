import React, { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import AuthService from "../services/auth-service";

const UsernameSetting = () => {
  const [newUsername, setNewUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AuthService.changeUsername(newUsername);
    if (res === true) {
      // show alert username changed successfuly
      console.log("username changed");
    } else {
      // show error message you get in [res]
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="New Username"
            type={"password"}
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
        <Grid item xs={3}>
          <Button type="submit">Change Username</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UsernameSetting;
