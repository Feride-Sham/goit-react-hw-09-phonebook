import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "./Login.module.css";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Enter your login</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={s.formBox}
        >
          <label className={s.formLabel}>
            <span className={s.formSpan}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={s.formInput}
            />
          </label>
          <label className={s.formLabel}>
            <span className={s.formSpan}>Password</span>

            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={s.formInput}
            />
          </label>
          <button type="submit" className={s.formBtn}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
