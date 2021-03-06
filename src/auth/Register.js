import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import AuthService from "../services/auth-service";
import AlertService from "../services/alert-service";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [rpassword, setrPassword] = useState();
  var regularExpression = new RegExp("^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}$");
  const [errors, setErrors] = useState({
    username: "",
    short: "",
    mismatch: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
    success: Boolean,
  });
  useEffect(() => {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((state) => ({
      ...state,
      type: "",
      message: "",
      success: Boolean,
    }));
    if (!validateFields(e)) {
      if (await AuthService.register(username, password)) {
        setErrors((state) => ({
          ...state,
          username: "Username taken",
        }));
      } else {
        setStatus((state) => ({
          ...state,
          type: "auth",
          message: "reg",
          success: true,
        }));
      }
    }
  };

  const validateFields = (e) => {
    e.preventDefault();
    let error = false;
    setErrors((state) => ({
      ...state,
      username: "",
      short: "",
      mismatch: "",
    }));
    if (!regularExpression.test(password)) {
      error = true;
      setErrors((state) => ({
        ...state,
        short: "At least 8 characters and a digit",
      }));
    }
    if (password !== rpassword && password) {
      error = true;
      setErrors((state) => ({
        ...state,
        mismatch: "Passwords don't match!",
      }));
    }
    return error;
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
          <AlertService data={status} />
          <Grid item xs={12}>
            <TextField
              label="Username"
              error={Boolean(errors?.username)}
              helperText={errors?.username}
              required
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={"password"}
              error={Boolean(errors?.short)}
              helperText={errors?.short}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>{" "}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm password"
              type={"password"}
              error={Boolean(errors?.mismatch)}
              helperText={errors?.mismatch}
              required
              onChange={(e) => setrPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" fullWidth type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Register;
