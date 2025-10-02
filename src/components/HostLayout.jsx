import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav"> {/* the absolute paths can be turned it into relative without any difference */}
        <NavLink to="/host" end className={({isActive}) => isActive ? "activenav" : null}>Dashboard</NavLink>
        <NavLink to="/host/income" className={({isActive}) => isActive ? "activenav" : null}>Income</NavLink>
        <NavLink to="/host/hostvans" className={({isActive}) => isActive ? "activenav" : null}>Vans</NavLink>
        <NavLink to="/host/reviews" className={({isActive}) => isActive ? "activenav" : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
