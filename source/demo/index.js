// IE 10+ compatibility (must come before other imports)
import "babel-polyfill";
import "../styles.css";

import React from "react";
import { render } from "react-dom";

import Application from "./Application";

render(<Application />, document.getElementById("root"));

// We should really have a cool dc402 favicon
// document.querySelector(
//   '[rel="shortcut icon"]'
// ).href = require("file!./favicon.png");
