import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      setTimeout(() => {
        navigate('/login');
      }, 2500);
    }
  })
  return (
    <div className="flex items-center h-screen">
      <img className="w-1/2 aspect-square m-auto" src="assets/PhonePeLogo.png" alt="hola" srcset="" />
    </div>
  );
}

export default SplashScreen;
