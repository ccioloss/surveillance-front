import React from "react"
import {
    Grid,
    TextField,
    Paper,
    Button,
    responsiveFontSizes,
  } from "@material-ui/core";
const cors_proxy = 'https://thingproxy.freeboard.io/fetch/';
function postUser() {
    if (document.getElementById('pass').value === document.getElementById('rpass').value) {
        let data = {
            username: document.getElementById('user').value,
            password: document.getElementById('pass').value
        }
        const postReq = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(data)
        }
        console.log(postReq);
        fetch(cors_proxy +'http://46.101.243.193:3000/auth/register', postReq)
        .then(response => response.json())
        .then(data => console.log(data))
    } else {
        alert("Password mismatch!");
    }
}
const Register = () => {
    return (
        <div style={{ padding: 30}}>
          <Paper>
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <TextField id = "user" label="Username"/>
              </Grid>
              <Grid item xs={12}>
                <TextField id = "pass" label="Password" type={"password"}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField id = "rpass" label="Repeat Password" type={"password"}></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth onClick = {postUser}> Register </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
};

export default Register;