import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/garbage.png";

const Nav = () => {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <img src={Logo} style={{ width: "50px" }} />
          </Link>
        </li>
        <li>
          <Link to="/map">MAP</Link>
        </li>
        <li>
          <Link to="/addrubbish">ADD RUBBISH</Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
