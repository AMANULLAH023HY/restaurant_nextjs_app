"use client";
import { useState } from "react";
import Login from "../_component/Login";
import Header from "../_component/Header";
import Signup from "../_component/Signup";
import Footer from "../_component/Footer";
import "./style.css";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <Header />
        <h1>Restaurant Login/Siginup Page</h1>
        {login ? <Login/> : <Signup />}

        <button className="button-link" onClick={() => setLogin(!login)}>
          {login
            ? "Do not have acount? SignUp"
            : "Already have an acoount? Login"}
        </button>

<Footer/>
      </div>
    </>
  );
};

export default Restaurant;
