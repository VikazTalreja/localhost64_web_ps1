// LoginForm.jsx

import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import purpleboy from "../assets/Purple_boy.png";

const LoginForm = () => {
  const email = document.getElementById("username");
  const password = document.getElementById("password");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., send data to a server).
    console.log("Login Form submitted:", formData);

    console.log(email.value);
    console.log(password.value);

    const d = {
      username: email.value,
      password: password.value,
    };

    console.log(d);

    axios
      .post("http://localhost:8080/auth/signin", d)
      .then((res) => {
        console.log(JSON.stringify(res));
        if (res.data.message === "success") {
          console.log(res.data.message);
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const newToken = localStorage.getItem("token");
    console.log(newToken);
    const finalToken = newToken.replace("Bearer ", "");
    console.log(finalToken);
    const info = jwtDecode(finalToken);
    console.log("----------------------------------");
    console.log(info);

    localStorage.setItem("name", info.name);
    localStorage.setItem("email", info.email);
    localStorage.setItem("type", info.type);
    localStorage.setItem("id", info.id);

    if (localStorage.getItem("type") == "Traveler") {
      window.location.href = "http://localhost:5173/client";
    } else {
      window.location.href = "http://localhost:5173/business";
    }
  };

  return (
    //

    <div className="Log-in">
      <section className="bg-white mt-28 dark:bg-gray-900">
        <div className="flex justify-center items-center space-y-20 min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5">
            <img src={purpleboy} alt="img" />
          </div>
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Welcome Back
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ready to Dive Back In? Let's Get Started! Unlock Your Dashboard
                with Your Credentials
              </p>

              <form className="spcae-y-10">
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Username
                  </label>
                  <input
                    placeholder="JohnDoe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    password
                  </label>
                  <input
                    placeholder="Enter Your Password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="login-button mt-10  flex items-center justify-between w-60 px-6   py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
