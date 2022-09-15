import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.scss";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<CssBaseline />
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
