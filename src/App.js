import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./auth/Login";
import { DevicesPage } from "./pages/DevicesPage";
import DashboardPage from "./pages/DashboardPage";
import RecordingsPage from "./pages/RecordingsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  const [token, setToken] = useState();

  // if (!token) to see the login page
  if (token) {
    return <Login setToken={setToken} />;
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
