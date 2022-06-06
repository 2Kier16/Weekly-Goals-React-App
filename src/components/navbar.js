import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navigation-links">
        <NavLink className="nav" exact to="/">
          Artist
        </NavLink>
        <NavLink className="nav" to="/Songs">
          Songs
        </NavLink>
      </div>
    </div>
  );
}
