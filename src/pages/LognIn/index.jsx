import React, { useState, useContext } from "react";
import Layout from "../../components/Layout";

import { cartContext } from "../../context";
import { Link } from "react-router-dom";

const LogIn = () => {
  const context = useContext(cartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <form className="flex flex-col gap-3 w-80">
          <h1 className="text-2xl font-medium text-center">Log In</h1>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-3 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="User"
            className="border border-gray-300 px-3 py-2 rounded-md"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-3 py-2 rounded-md"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link to="/" className="text-blue-600 hover:underline">
            <button
              type="button"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 w-80"
              onClick={() => context.setLoginData(email,user, password)}
            >
              Log In
            </button>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default LogIn;
