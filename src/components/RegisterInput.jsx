/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";

const RegisterInput = ({ register }) => {
  const [name, setName, handleName] = useInput();
  const [email, setEmail, handleEmail] = useInput();
  const [password, setPassword, handlePassword] = useInput();

  return (
    <>
      <div className="form-floating">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
          className="form-control my-3 w-100 fs-5"
          id="name"
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          className="form-control my-3 w-100 fs-5"
          id="email"
        />
        <label htmlFor="email">Email</label>
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
        onClick={() => register({ name, email, password })}
        className="btn btn-primary w-100"
      >
        Register
      </button>
    </>
  );
};

export default RegisterInput;
