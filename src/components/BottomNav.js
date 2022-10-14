import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BottomNav() {
  let activeClassName = "bg-primary rounded-full p-3";
  let bgRound ="rounded-full bg-[gray] p-3";
  return (
    <footer className="fixed left-0 bottom-0 w-full bg-[white]">
      <ul className="px-2 flex m-auto max-w-screen-md justify-between text-[white] my-4">
        <li>
          <NavLink to="home" className={({ isActive }) => (isActive ? activeClassName : bgRound)}>
            <FontAwesomeIcon size='lg' className='' icon="house" />
          </NavLink>
        </li>
        <li>
          <NavLink to="stores" className={({ isActive })=>isActive ? activeClassName : bgRound}>
          <FontAwesomeIcon size='lg' className='mx-1' icon="bag-shopping" />
          </NavLink>
        </li>
        <li>
          <NavLink to="insurance" className={({ isActive })=>isActive ? activeClassName : bgRound}>
          <FontAwesomeIcon size='lg' className='' icon="file-circle-check" />
          </NavLink>
        </li>
        <li>
          <NavLink to="wealth" className={({ isActive })=>isActive ? activeClassName : bgRound}>
          <FontAwesomeIcon size='lg' className='mx-1' icon="indian-rupee-sign" />
          </NavLink>
        </li>
        <li>
          <NavLink to="history" className={({ isActive })=>isActive ? activeClassName : bgRound}>
          <FontAwesomeIcon size='lg' className='' icon="right-left" />
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default BottomNav;
