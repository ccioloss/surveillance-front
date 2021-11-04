import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import AuthService from "../services/auth-service";

const PasswordSettings = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if oldPassword is correct

    const res = await AuthService.changePassword(newPassword);
    if (res === true) {
      // show allert that password was changed successfuly
      console.log("password changed");
    } else {
      // show alert that password did not change and show the error message you get in [res]
      console.log(res);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid container direction="column" spacing={2}>
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
          <Button type="submit">Change Password</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PasswordSettings;
