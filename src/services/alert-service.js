import React, { useState } from "react";
import Alert from "@mui/material/Alert";

const AlertService = ({ data }) => {
  if (data.type === "auth") {
    if (data.message === "login") {
      return (
        <div>
          {data.success ? (
            <></>
          ) : (
            <Alert severity="error">
              Please check your username or password and try again.
            </Alert>
          )}
        </div>
      );
    }
    if (data.message === "reg") {
      return (
        <div>
          {data.success ? (
            <Alert severity="success">Account successfully created</Alert>
          ) : (
            <></>
          )}
        </div>
      );
    }
  }
  if (data.type === "change") {
    if (data.message === "username") {
      return (
        <div>
          {data.success ? (
            <Alert severity="success">Username changed</Alert>
          ) : (
            <Alert severity="error">Username could not be changed</Alert>
          )}
        </div>
      );
    }
    if (data.message === "password") {
      return (
        <div>
          {data.success ? (
            <Alert severity="success">Password changed</Alert>
          ) : (
            <Alert severity="error">Password could not be changed</Alert>
          )}
        </div>
      );
    }
  }
  return <></>;
};

export default AlertService;
