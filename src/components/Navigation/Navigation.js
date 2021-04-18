import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { authSelectors } from "../../redux/auth";
// import s from "./Navigation.module.css";

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

const Navigation = ({ isAuthenticated }) => {
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
      {isAuthenticated && (
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
