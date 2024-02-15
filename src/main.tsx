import React from "react";
import ReactDOM from "react-dom/client";
import "ol/ol.css";
import "./modules/application/application.css";

import { MapApplication } from "./modules/application/mapApplication";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<MapApplication />);
