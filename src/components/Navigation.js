import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>Mathieu Etcheverry</h1>
      <ul>
        <NavLink to="/" className={(navigation) => (navigation.isActive ? "navigation-select" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(navigation) => navigation.isActive ? "navigation-select" : ""}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;