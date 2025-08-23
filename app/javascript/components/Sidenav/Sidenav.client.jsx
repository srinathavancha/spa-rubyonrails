"use client";

import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authSlice";
import { useIsRuleActive } from "../../hooks/useRules";
// You can import your styles and icons as needed

export default function Sidenav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define your menu items and the permission rules controlling their visibility
  const menuItems = [
    { path: "/dashboard", text: "Dashboard", icon: "bi-speedometer2", rule: "accessMemberDashboard" },
    { path: "/profile", text: "Profile", icon: "bi-person", rule: "showUserProfile" },
    { path: "/settings", text: "Settings", icon: "bi-gear", rule: "accessPlatformSettings" },
  ];

  // You can add other menu items with rules if needed, just like this:
  // { path: "/product-admin", text: "Product Admin", icon: "bi-box", rule: "accessProductAdmin" },
  // { path: "/admin", text: "Admin Panel", icon: "bi-shield-lock", rule: "accessAdminPanel" },

  // Filter menu items by active rules/grants
  const filteredMenuItems = menuItems.filter(({ rule }) => useIsRuleActive(rule));

  useEffect(() => {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");

    function collapseSidebar() {
      const isCollapsed = document.body.classList.toggle("sidebar-collapsed");
      if (window.innerWidth < 992) {
        sidebarToggle.setAttribute("aria-expanded", (!isCollapsed).toString());
        mobileSidebarToggle.style.display = "inline-flex";
        // sidebarToggle.style.display = "none";
        sidebarToggle.style.visibility = "hidden";
      }
    }

    function expandSidebar() {
      document.body.classList.remove("sidebar-collapsed");
      mobileSidebarToggle.style.display = "none";
      sidebarToggle.style.display = "inline-flex";
      sidebarToggle.style.visibility = "visible";
    }

    if (sidebarToggle) sidebarToggle.addEventListener("click", collapseSidebar);
    if (mobileSidebarToggle) mobileSidebarToggle.addEventListener("click", expandSidebar);

    const handleResize = () => {
      if (window.innerWidth < 992) {
        expandSidebar();
      } else if (sidebarToggle) {
        sidebarToggle.style.display = "inline-flex";
        sidebarToggle.style.visibility = "visible";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      if (sidebarToggle) sidebarToggle.removeEventListener("click", collapseSidebar);
      if (mobileSidebarToggle) mobileSidebarToggle.removeEventListener("click", expandSidebar);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      {/* Mobile toggle button, visible only on smaller screens */}
      <button id="mobileSidebarToggle" className="btn btn-primary d-lg-none" aria-label="Toggle sidebar">
        <i className="bi bi-list"></i>
      </button>

      {/* Sidebar */}
      <div className="sidebar flex-column" aria-label="Sidebar navigation">
        <div className="toggle-container" title="Toggle Sidebar">
          <button
            id="sidebarToggle"
            className="btn btn-sm btn-outline-secondary"
            aria-label="Toggle sidebar"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <ul className="nav flex-column flex-grow-1">
          {filteredMenuItems.map(({ path, text, icon }) => (
            <li className="nav-item" key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center${isActive ? " active" : ""}`
                }
                title={text}
              >
                <i className={`bi ${icon}`}></i>
                <span className="sidebar-label ms-2">{text}</span>
              </NavLink>
            </li>
          ))}
          <li className="nav-item mt-auto">
            <a
              href="#logout"
              className="nav-link d-flex align-items-center"
              title="Logout"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right"></i>
              <span className="sidebar-label ms-2">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
