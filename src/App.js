import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { DevicesPage } from "./pages/DevicesPage";
import RecordingsPage from "./pages/RecordingsPage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";
import useToken from "./auth/useToken";
import Authentication from "./auth/Authentication";
const App = () => {
  const { token, setToken } = useToken();
  if (!token) {
    return <Authentication setToken={setToken} />;
  }

  return (
    <div>
      <Route exact path="/" render={DashboardPage} />
      <Route exact path="/recordings" render={RecordingsPage} />
      <Route exact path="/devices" render={DevicesPage} />
      <Route exact path="/settings" render={SettingsPage} />
    </div>
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
