import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import { authSelectors } from "../../redux/auth";

import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={s.AppBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
