import React from "react";
import { Routes, Route } from "react-router-dom";
import BatPage from "./pages/batpage/bat";
import FieldPage from "./pages/fieldpage/field";
import OdiPage from "./pages/odipage/odipage";

const AppRoutes = ()=> {
    return (
      <div>
        <Routes>
          <Route path="/bats" element={<BatPage/>} />
          <Route path="/fields" element={<FieldPage/>} />
          <Route path="/odi" element={<OdiPage/>} />
        </Routes>
      </div>
    );
  };
  export default AppRoutes;