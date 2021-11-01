import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import AuthService from "../services/auth-service";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [rpassword, setrPassword] = useState();

  const handleSubmit = async (e) => {
    if (password === rpassword && password) {
      e.preventDefault();
      await AuthService.register(username, password);
    } else alert("Passwords don't match!");
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
