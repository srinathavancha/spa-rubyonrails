"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authSlice";
import { useIsRuleActive } from "../../hooks/useRules";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@/styles/components/_header.scss';

export default function HeaderClient({ user }) {
  const dispatch = useDispatch();
  const canSeeProfile = useIsRuleActive("showUserProfile");

  const handleLogout = () => {
    dispatch(logoutUser());
  };
console.log("User:", user);
console.log("Can see profile:", canSeeProfile);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-bootstrap-fill me-2 fs-4"></i> Test Admin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="tel:+1234567890">
                <i className="bi bi-telephone me-1"></i> Contact
              </a>
            </li>

            {user && canSeeProfile && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical fs-5"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                  style={{ minWidth: "200px" }}
                >
                  <li className="dropdown-item d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                    />
                    <div>
                      <strong>{user.username}</strong>
                      <br />
                      <small className="text-muted">{user.email || "user@example.com"}</small>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                      type="button"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
