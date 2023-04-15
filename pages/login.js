import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loginInfo, setLoginInfo] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginForm.email && loginForm.password) {
      setLoginInfo({ ...loginInfo, loginForm });
      setLoginForm({ email: "", password: "" });
    } else {
      alert("Missing Fields!");
    }
  };
  return (
    <>
      <section className={styles.page}>
        <div className={styles.login}>Login</div>

        <div className={styles.inputDiv}>
          <input
            type="text"
            name="email"
            value={loginForm.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputDiv}>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className={styles.submitDiv}>
          <button
            className={styles.submitButton}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
