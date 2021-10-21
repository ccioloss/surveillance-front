import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { DevicesPage } from "./pages/DevicesPage";
import RecordingsPage from "./pages/RecordingsPage";
import SettingsPage from "./pages/SettingsPage";
import Login from "./auth/Login";
import Register from "./auth/Register";

const App = () => {
  const [token, setToken] = useState();

  // if (!token) to see the login page
  if (!token) {
    return (
      <Register />
      // <Login setToken={setToken} />
      //   <Authentication />
    );
  }

  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/recordings" component={RecordingsPage} />
      <Route exact path="/devices" component={DevicesPage} />
      <Route exact path="/settings" component={SettingsPage} />
    </>
  );
};

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
