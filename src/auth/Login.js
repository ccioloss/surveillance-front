import React, { useState } from "react";
import { loginRequest } from "../requests/login";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Button,
} from "@material-ui/core";

const Login = () => {
  const [checked, setChecked] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest({ username: username, password: password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
              label="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={"password"}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={"Keep me logged in"}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Login;
