"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/authSlice';
import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage.client.jsx';
import ProductAdminPage from '../pages/ProductAdminPage.client.jsx';
import PlatformSettingsPage from '../pages/PlatformSettingsPage.client.jsx';
import AdminPanelPage from '../pages/AdminPanelPage.client.jsx';

export default function MainContentClient() {
  const loggedIn = useSelector(selectLoggedIn);

  if (!loggedIn) return null; // Login handled at root template

  return (
      <section>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product-admin" element={<ProductAdminPage />} />
          <Route path="/platform-settings" element={<PlatformSettingsPage />} />
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </section>
  );
}
