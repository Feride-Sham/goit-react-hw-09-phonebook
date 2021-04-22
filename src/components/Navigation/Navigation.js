import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { authSelectors } from "../../redux/auth";

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

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        style={style.link}
        activeStyle={style.activeLink}
      >
        HOME
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to={routes.contacts}
          exact
          style={style.link}
          activeStyle={style.activeLink}
        >
          PHONEBOOK
        </NavLink>
      )}
    </nav>
  );
}
