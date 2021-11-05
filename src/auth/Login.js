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
import AlertService from "../services/alert-service";

const Login = ({ setToken }) => {
  const [checked, setChecked] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState({
    type: "",
    message: "",
    success: Boolean,
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((state) => ({
      ...state,
      type: "",
      message: "",
      success: Boolean,
    }));
    const token = await AuthService.login(username, password);
    if (!token) {
      setStatus((state) => ({
        ...state,
        type: "auth",
        message: "login",
        success: false,
      }));
    }
    await setToken(token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: 30 }}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AlertService delay="5000" data={status} />

          <Grid item xs={12}>
            <TextField
              style={{ width: "100" }}
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
            <Button variant="outlined" fullWidth type="submit">
              Enter
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
