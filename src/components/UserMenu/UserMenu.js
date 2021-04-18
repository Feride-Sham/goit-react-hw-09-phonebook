import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import s from "./UserMenu.module.css";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import myAvatar from "./avatar.png";

const style = {
  svg: {
    fontSize: "40",
  },
};

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.userMenu}>
      <img src={avatar} alt="" width="40" className={s.avatar} />
      <span className={s.span}>Hi, {name}</span>
      <ExitToAppOutlinedIcon
        onClick={onLogout}
        className={s.icon}
        style={style.svg}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: myAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
