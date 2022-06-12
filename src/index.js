import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "antd/dist/antd.css";
import { AppRoutes } from "./routes/AppRoutes";
import { MainRouter } from "./routes/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
