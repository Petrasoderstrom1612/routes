import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const VanDetailsLinks = () => {
  return (
      <nav className="host-nav">
        <NavLink to="details" className={({isActive}) => isActive ? "activenav" : null}>Details</NavLink>
        <NavLink to="pricing" className={({isActive}) => isActive ? "activenav" : null}>Pricing</NavLink>
        <NavLink to="photos" className={({isActive}) => isActive ? "activenav" : null}>Photos</NavLink>
      </nav>

  );
};

export default VanDetailsLinks;
