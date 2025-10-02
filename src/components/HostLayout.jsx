import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav"> 
        <NavLink to="." end className={({isActive}) => isActive ? "activenav" : null}>Dashboard</NavLink>
        <NavLink to="income" className={({isActive}) => isActive ? "activenav" : null}>Income</NavLink>
        <NavLink to="hostvans" className={({isActive}) => isActive ? "activenav" : null}>Vans</NavLink>
        <NavLink to="reviews" className={({isActive}) => isActive ? "activenav" : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
