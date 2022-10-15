import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomNav() {
  let activeClassName = "bg-primary rounded-full p-1 iAmActiveBitch dark:bg-[white] dark:text-dark_primary";
  let bgRound = "rounded-full bg-[gray] p-1 dark:bg-[transparent]";
  return (
    <footer className="fixed left-0 bottom-0 w-full bg-[white] dark:bg-dark_primary">
      <ul className="px-2 flex m-auto max-w-screen-md justify-between md:justify-evenly text-[white] mt-3 mb-1 dark:text-dark_ternary">
        <li className="text-center">
          <NavLink to="home" className={({ isActive }) => (isActive ? activeClassName : bgRound)}>
            <FontAwesomeIcon size="sm" className="mx-1" icon="house" />
          </NavLink>
          <div className="text-[gray] dark:text-dark_ternary mt-1 font-medium text-sm md:text-base">Home</div>
        </li>

        <li className="text-center">
          <NavLink to="stores" className={({ isActive }) => (isActive ? activeClassName : bgRound)}>
            <FontAwesomeIcon size="sm" className="mx-1" icon="bag-shopping" />
          </NavLink>
          <div className="text-[gray] dark:text-dark_ternary mt-1 font-medium text-sm md:text-base">Stores</div>
        </li>

        <li className="text-center">
          <NavLink to="insurance" className={({ isActive }) => (isActive ? activeClassName : bgRound)}>
            <FontAwesomeIcon size="sm" className="mx-1" icon="file-circle-check" />
          </NavLink>
          <div className="text-[gray] dark:text-dark_ternary mt-1 font-medium text-sm md:text-base">Insurance</div>
        </li>

        <li className="text-center">
          <NavLink to="wealth" className={({ isActive }) => (isActive ? activeClassName : bgRound)}>
            <FontAwesomeIcon size="sm" className="mx-2" icon="indian-rupee-sign"/>
          </NavLink>
          <div className="text-[gray] dark:text-dark_ternary mt-1 font-medium text-sm md:text-base">Wealth</div>
        </li>

        <li className="text-center">
          <NavLink to="history" className={({ isActive }) => (isActive ? activeClassName : bgRound)}>
            <FontAwesomeIcon size="sm" className="mx-[3px]" icon="right-left" />
          </NavLink>
          <div className="text-[gray] dark:text-dark_ternary mt-1 text-sm md:text-base font-medium ">History</div>
        </li>
      </ul>
    </footer>
  );
}

export default BottomNav;
