import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
        </Route>

        <Route>
          <Route path="/dashboard" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
