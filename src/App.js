import React from "react";
import "./App.css";

import {Header, About, Achievements, Features, Team, Banner, Blog, Footer} from "./container";

const App = ()=>{
    return(
        <>
            < Header />
            < About />
            < Achievements />
            < Features />
            < Team />
            < Banner />
            < Blog />
            < Footer />
        </>
    )
};

export default App;