import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <BottomNav />
    </div>
  );
}

export default LandingPage;
