import React, { useState } from "react";
import { TextField, Grid, Button, Divider } from "@mui/material";
import PasswordSettings from "./PasswordSettings";
import UsernameSetting from "./UsernameSettings";
import DeleteAccount from "./DeleteAccount";
import { Typography } from "@mui/material";

const Settings = () => {
  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item>
          <Typography color="gray" variant="h6">
            Change your password
          </Typography>
        </Grid>
        <Grid item>
          <PasswordSettings />
        </Grid>
        <Grid item>
          <Typography color="gray" variant="h6">
            Change your password
          </Typography>
        </Grid>
        <Grid item>
          <UsernameSetting />
        </Grid>
        <Grid item>
          <Typography color="gray" variant="h6">
            Delete your account
          </Typography>
        </Grid>
        <Grid item>
          <DeleteAccount />
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
