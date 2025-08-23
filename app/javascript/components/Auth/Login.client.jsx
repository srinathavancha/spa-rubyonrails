"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectAuthError, selectAuthStatus } from "../../store/authSlice";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/components/_auth.scss';

export default function Login() {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <form className="login-form border rounded p-4 shadow" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">Login</h2>

        {authError && <div className="alert alert-danger">{authError}</div>}

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username or Email</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            disabled={authStatus === "loading"}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={authStatus === "loading"}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={authStatus === "loading"}>
          {authStatus === "loading" ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
