import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <imag />
          </Link>
        </li>
        <li>
          <Link to="/map">map</Link>
        </li>

        <li>
          <Link to="/addlocation">Add Location</Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
