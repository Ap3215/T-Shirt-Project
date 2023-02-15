import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
