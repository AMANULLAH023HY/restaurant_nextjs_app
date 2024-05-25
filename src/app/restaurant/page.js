"use client";
import { useState } from "react";
import RestaurantLogin from "../_component/restaurantLogin";
import RestaurantSignup from "../_component/restaurantSignup";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
      <h1>Restaurant Login/Siginup Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignup />}

      <button className="button-link" onClick={() => setLogin(!login)}>
        {login
          ? "Do not have acount? SignUp"
          : "Already have an acoount? Login"}
      </button>
      </div>
    </>
  );
};

export default Restaurant;
