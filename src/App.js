import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { DevicesPage } from "./pages/DevicesPage";
import RecordingsPage from "./pages/RecordingsPage";
import SettingsPage from "./pages/SettingsPage";
import Login from "./auth/Login";
import Authentication from "./auth/Authentication";
import Dashboard from "./dashboard/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import Main from "./pages/Main";

const App = () => {
  const [token, setToken] = useState();

  // if (!token) to see the login page
  if (token) {
    return (
      <Main />
      // <Login setToken={setToken} />
      //   <Authentication />
    );
  }

  return (
    <>
      <Route exact path="/" component={DashboardPage} />
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
