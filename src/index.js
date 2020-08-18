import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";


import "./Shaadi.css";

import Shaadi from "./Shaadi";

ReactDom.render(
    <>
        <BrowserRouter>
             <Shaadi/>
        </BrowserRouter>
    </>,document.getElementById("root")
);