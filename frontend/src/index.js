import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./components/contexts/register";
import LoginProvider from "./components/contexts/login";
import HeaderProvider from "./components/contexts/header";
import ProductProvider from "./components/contexts/main";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
        <HeaderProvider>
          <ProductProvider>
            <RegisterProvider>
              <LoginProvider>
                <App />
              </LoginProvider>
            </RegisterProvider>
          </ProductProvider>
        </HeaderProvider>
  </Router>
);
