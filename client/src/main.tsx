import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ProvideUser } from "./contexts/userContext";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <ProvideUser>
                <App />
            </ProvideUser>
        </BrowserRouter>
    </React.StrictMode>
);
