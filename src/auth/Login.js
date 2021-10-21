import React, { useEffect, useRef } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";

const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const [username, setUser] = React.useState();
  const [password, setPass] = React.useState();
  const load = useRef(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    setUser(document.getElementById("user").value);
    setPass(document.getElementById("pass").value);
  };

  useEffect(() => {
    if (load.current) {
      let data = {
        username: username,
        password: password,
      };
      const postReq = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      console.log(postReq);
      fetch(cors_proxy + "http://46.101.243.193:3000/auth/login", postReq).then(
        (response) => {
          if (response.status !== 201) {
            alert("Wrong credentials");
          } else {
            response.json().then((data) => console.log(data));
          }
        }
      );
    } else {
      load.current = true;
    }
  }, [username, password]);

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField id="user" label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField id="pass" label="Password" type={"password"}></TextField>
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
            <Button fullWidth onClick={handleClick}>
              {" "}
              Login{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
