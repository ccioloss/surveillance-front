import { StrictMode, useState } from "react";
import { render } from "react-dom";
import Dashboard from "./dashboard/Dashboard";
import Login from "./auth/Login";

const App = () => {
  const [token, setToken] = useState();

  // if (!token) to see the login page
  if (token) {
    return <Login setToken={setToken} />;
  }

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
