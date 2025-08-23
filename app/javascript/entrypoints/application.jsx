
import React from "react";
// Import Bootstrap's JavaScript bundle (Popper included)
import * as bootstrap from 'bootstrap';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from '@/store/index.js';
import App from '@/App.jsx';
import Rails from '@rails/ujs';
Rails.start();

// import NavigationWidget from "../components/NavigationWidget";
// import UserWidget from "../components/UserWidget";

// const navigationRoot = document.getElementById("react-navigation");
// if (navigationRoot) {
//   createRoot(navigationRoot).render(<NavigationWidget />);
// }

// const userRoot = document.getElementById("react-user");
// if (userRoot) {
//   const currentUser = JSON.parse(userRoot.dataset.currentUser || "null");
//   const logoutPath = userRoot.dataset.logoutPath || "/logout";
//   createRoot(userRoot).render(
//     <UserWidget currentUser={currentUser} logoutPath={logoutPath} />
//   );
// }


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);