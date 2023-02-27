import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/layout/header";
import Homepage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
