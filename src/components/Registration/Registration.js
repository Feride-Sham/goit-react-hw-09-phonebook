import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "./Registration.module.css";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Registration page</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={s.formBox}
        >
          <label className={s.formLabel}>
            <span className={s.formSpan}>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={s.formInput}
            />
          </label>
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
            Register
          </button>
        </form>
      </div>
    );
  }
}

// сокращенная запись mapDispatchToProps
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Registration);
