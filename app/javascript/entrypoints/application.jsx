
import React from "react";
import { createRoot } from "react-dom/client";
import Rails from '@rails/ujs';
Rails.start();

import NavigationWidget from "../components/NavigationWidget";
import UserWidget from "../components/UserWidget";

const navigationRoot = document.getElementById("react-navigation");
if (navigationRoot) {
  createRoot(navigationRoot).render(<NavigationWidget />);
}

const userRoot = document.getElementById("react-user");
if (userRoot) {
  const currentUser = JSON.parse(userRoot.dataset.currentUser || "null");
  const logoutPath = userRoot.dataset.logoutPath || "/logout";
  createRoot(userRoot).render(
    <UserWidget currentUser={currentUser} logoutPath={logoutPath} />
  );
}
