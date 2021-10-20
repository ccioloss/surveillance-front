import { StrictMode } from "react";
import { render } from "react-dom";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
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
