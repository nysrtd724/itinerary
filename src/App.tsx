import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Mypage from "./components/Mypage";
import Journey from "./components/Journey";
import Decided from "./components/mypage/Decided";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Mypage />} />
          <Route path={`/journey/`} element={<Journey />} />
          <Route path={`/decided/`} element={<Decided />}>
            <Route path={`:id`} element={<Decided />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
