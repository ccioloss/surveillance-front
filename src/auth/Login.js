import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import AuthService from "../services/auth-service";
import PropTypes from "prop-types";
import { AlertTitle, Alert } from "@material-ui/lab";

const Login = ({ setToken }) => {
  const [checked, setChecked] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await AuthService.login(username, password);
    if (!token) {
      setError(true);
    }
    await setToken(token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: 30 }}>
        {error ? (
          <Alert severity="error">
            <AlertTitle>Login fail</AlertTitle>
            Please check your username or password and try again.
          </Alert>
        ) : (
          <></>
        )}
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
