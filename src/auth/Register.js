import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import AuthService from "../services/auth-service";
import { AlertTitle, Alert } from "@material-ui/lab";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [rpassword, setrPassword] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    if (password === rpassword && password) {
      e.preventDefault();
      setError(await AuthService.register(username, password));
    } else alert("Passwords don't match!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: 30 }}>
        {error ? (
          <Alert severity="error">
            <AlertTitle>Registration failed</AlertTitle>
            Username is already taken. Please choose another one.
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
            ></TextField>{" "}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm password"
              type={"password"}
              required
              onChange={(e) => setrPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Register;
