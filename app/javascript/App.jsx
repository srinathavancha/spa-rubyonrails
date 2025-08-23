"use client";

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthStatus, selectAuthStatus, selectLoggedIn, selectUser, logoutUser } from '@/store/authSlice';
import { fetchGrantsAndRules, selectRulesStatus } from '@/store/rulesSlice';

import 'bootstrap-icons/font/bootstrap-icons.css'
import HeaderClient from './components/Header/Header.client.jsx';
import FooterClient from './components/Footer/Footer.client.jsx';
import Sidenav from './components/Sidenav/Sidenav.client.jsx';
import MainContentClient from './components/MainContent/MainContent.client.jsx';
import Login from './components/Auth/Login.client.jsx';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "@/styles/application.scss";

export default function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const rulesStatus = useSelector(selectRulesStatus);
  const loggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (authStatus === 'idle') dispatch(fetchAuthStatus());
    if (rulesStatus === 'idle') dispatch(fetchGrantsAndRules());
  }, [dispatch, authStatus, rulesStatus]);

  if (authStatus === 'loading' || rulesStatus === 'loading') return <div>Loading...</div>;

  return (
    <Router>
      <div>
        <HeaderClient user={user} onLogout={() => dispatch(logoutUser())} />
        <div style={{ minHeight: 0 }}>
          {loggedIn && <Sidenav />}
          <main className="content-wrapper" role="main" tabIndex={-1}>
            {loggedIn ? <MainContentClient /> : <Login />}
          </main>
        </div>
        <FooterClient />
      </div>
    </Router>
  );
}
