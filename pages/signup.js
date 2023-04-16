import React, { useState, useRef, useEffect } from "react";
import styles from "./signup.module.css";
import Link from "next/link";

const Signup = () => {
  // to change disease names/size, you only need to change the names in the list
  // and the name in the signUpForm useState
  const univList = ["Select University", "Northwestern University"];

  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    univ: "",
  });
  const [info, setInfo] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const handleSubmit = (e) => {
    // change the required fields if needed
    if (
      signUpForm.firstName &&
      signUpForm.lastName &&
      signUpForm.email &&
      signUpForm.password &&
      signUpForm.address &&
      signUpForm.univ &&
      signUpForm.univ != "Select University"
    ) {
      const newForm = { ...signUpForm, id: new Date().getTime().toString() };
      console.log(newForm);
      setInfo([...info, newForm]);
      setSignUpForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        univ: "",
      });
    } else {
      alert("Missing Fields!");
    }
  };

  return (
    <>
      <main className={styles.page}>
        <h2 className={styles.signUp}> Sign Up </h2>
        <PersonalInfo
          signUpForm={signUpForm}
          handleChange={handleChange}
          univList={univList}
        />

        <div className={styles.submitDiv}>
          <Link href="/login">
            <button
              className={styles.submitButton}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

// Nested Components
const PersonalInfo = ({ signUpForm, handleChange, univList }) => {
  return (
    <form className={styles.formControl}>
      <div className={styles.sectionTitle}> Personal Information </div>
      <div className={styles.name}>
        <input
          className={styles.firstName}
          type="text"
          name="firstName"
          value={signUpForm.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          className={styles.lastName}
          type="text"
          name="lastName"
          value={signUpForm.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>

      <input
        className={styles.wholeBlockInput}
        type="text"
        name="email"
        value={signUpForm.email}
        placeholder="Email Address"
        onChange={handleChange}
      />

      <input
        className={styles.wholeBlockInput}
        type="password"
        name="password"
        value={signUpForm.password}
        placeholder="Password"
        onChange={handleChange}
      />

      <input
        className={styles.wholeBlockInput}
        type="text"
        name="address"
        value={signUpForm.address}
        placeholder="Address"
        onChange={handleChange}
      />

      <div>
        <select
          className={styles.selectedState}
          onChange={handleChange}
          value={signUpForm.univ}
          name="univ"
        >
          {univList.map((univ) => {
            return (
              <option value={univ} key={univList.indexOf(univ)}>
                {univ}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default Signup;
