import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div >
      <Navbar />
      <div className="bg-background min-h-screen">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}

export default LandingPage;
