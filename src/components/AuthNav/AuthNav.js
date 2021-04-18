import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const style = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#ffffff",
  },
  activeLink: {
    color: " #6b046bf5",
  },
};

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={routes.registration}
        exact
        style={style.link}
        activeStyle={style.activeLink}
      >
        REGISTRATION
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        style={style.link}
        activeStyle={style.activeLink}
      >
        LOGIN
      </NavLink>
    </div>
  );
};

export default AuthNav;
