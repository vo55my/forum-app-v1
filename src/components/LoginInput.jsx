/* eslint-disable no-unused-vars */
import { useState } from "react";
import useInput from "../hooks/useInput";

const LoginInput = ({ login }) => {
  const [email, setEmail, handleEmail] = useInput();
  const [password, setPassword, handlePassword] = useInput();

  return (
    <>
      <div className="form-floating">
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmail}
          className="form-control w-100 fs-5"
          id="email"
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          className="form-control my-3 w-100 fs-5"
          id="password"
        />
        <label htmlFor="password">Password</label>
      </div>
      <button
        onClick={() => login({ email, password })}
        className="btn btn-primary w-100"
      >
        Login
      </button>
    </>
  );
};

export default LoginInput;
