import { StrictMode, useState } from "react";
import { render } from "react-dom";
import Dashboard from "./dashboard/Dashboard";
import Login from "./auth/Login";
import Authentication from "./auth/Authentication";

const App = () => {
  const [token, setToken] = useState();

  // if (!token) to see the login page
  // if (!token) {
  return <Authentication />;
  // }

  return (
    <>
      <Dashboard />
    </>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
