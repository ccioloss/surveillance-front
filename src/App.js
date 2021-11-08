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
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/recordings" component={RecordingsPage} />
      <Route exact path="/devices" component={DevicesPage} />
      <Route exact path="/settings" component={SettingsPage} />
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
