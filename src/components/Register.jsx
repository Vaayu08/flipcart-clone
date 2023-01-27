import React, { useEffect } from "react";
// import { JSON } from 'react-router-dom'
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import Login from "./Login";

const Register = () => {
  const [userData, setUserData] = useState({});
  const router = useNavigate();
  useEffect(() => {
    console.log("userData updated!!");
    if (userData) {
    }
    const toastUserData = JSON.stringify;
    localStorage.setItem("userData", userData);
    router("/login")
    toast("submitted");
  }, [userData]);

  // useEffect(() => {
  //   const localStorageData =
  //     JSON.parse(localStorage.getItem("isUserLoggedIn")) || [];
  //   if (localStorageData) {
  //     console.log("user logged in already , directing to home");
  //     router("/home");
  //   }
  // }, []);

  function submitHandle(e) {
    e.preventDefault();
    alert("Submitted")

    // setUserData({ name: "siddharth", email: "abc@mail.com", password: "abc" });
  }
  console.log(userData, "UserData heree");
  return (
    <div style={{ width: "70%", marginLeft: "auto" }}>
      <h1>Register</h1>
      {/* <Login/> */}
      <form onSubmit={submitHandle}>
        <label>Name</label>
        <br />
        <input type="test" />
        <br />
        <label>Email</label>
        <br />
        <input type="Email" />
        <br />
        <label>Password</label>
        <br />
        <input type="password" />
        <br />
        <input type="submit" />
        <br />
      </form>
      <a href="./Login">Already user? Login.</a>
      {/* <button onClick={() => router("./Login")}>Click</button> */}
    </div>
  );
};

export default Register;
