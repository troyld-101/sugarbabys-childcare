import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Import HashRouter instead
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
);
