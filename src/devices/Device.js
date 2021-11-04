import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import DataService from "../services/data-service";
const Device = () => {
  const [deviceToken, setDeviceToken] = useState("");
  const [showToken, setShowToken] = useState(false);

  const handleClickShowToken = () => setShowToken(!showToken);
  const handleMouseDownToken = () => setShowToken(!showToken);

  const generateToken = async () => {
    const res = await DataService.generateDeviceToken();

    // show alert that token was changed successfully

    setDeviceToken(res.deviceToken);
    setShowToken(true);
  };

  const deleteToken = async () => {
    const res = await DataService.deleteDeviceToken();
    console.log(await res);
    if (res === true) {
      setDeviceToken("");
      alert("device token deleted!");
      // show alert that token was deleted successfully
    } else {
      alert(res);

      // show error alert with the message you get in [res]
    }
  };

  useEffect(async () => {
    const res = await DataService.getDeviceToken();
    console.log(res.deviceToken);
    if (res.deviceToken) {
      setDeviceToken(res.deviceToken);
    } else {
      alert(res);
      setDeviceToken("");
    }
  }, []);

  return (
    <>
      <Grid container spacing={3} direction="column" padding={2}>
        <Grid item>
          <TextField
            label="Your device token"
            variant="outlined"
            disabled
            value={deviceToken}
            type={showToken ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowToken}
                    onMouseDown={handleMouseDownToken}
                  >
                    {showToken ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button onClick={generateToken}>Generate new device token</Button>
        </Grid>
        <Grid item>
          <Button onClick={deleteToken}>Delete current device token</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Device;
