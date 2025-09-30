import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const VanDetailsLinks = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink to="details" className={({isActive}) => isActive ? "activenav" : null}>Details</NavLink>
        {/* <NavLink to="/host/income" className={({isActive}) => isActive ? "activenav" : null}>Income</NavLink>
        <NavLink to="/host/vans" className={({isActive}) => isActive ? "activenav" : null}>Vans</NavLink>
        <NavLink to="/host/reviews" className={({isActive}) => isActive ? "activenav" : null}>Reviews</NavLink> */}
      </nav>
      <Outlet />
    </>
  );
};

export default VanDetailsLinks;
