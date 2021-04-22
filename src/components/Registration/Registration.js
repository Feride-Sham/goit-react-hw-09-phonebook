import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "./Registration.module.css";

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.error("Ooops");
    }
  };

  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.formBox}>
        <label className={s.formLabel}>
          <span className={s.formSpan}>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.formInput}
          />
        </label>
        <label className={s.formLabel}>
          <span className={s.formSpan}>Email</span>

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.formInput}
          />
        </label>
        <label className={s.formLabel}>
          <span className={s.formSpan}>Password</span>

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
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
