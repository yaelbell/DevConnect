import React, { Fragment } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
