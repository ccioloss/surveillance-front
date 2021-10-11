import { StrictMode } from "react";
import Login from "./Login"
import { render } from "react-dom";

const App = () => {
    return(
    <>
        <Login/>
    </>
    )
    
}

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById("root")
)