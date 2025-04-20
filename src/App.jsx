import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from './components/first/Index';
import Catalog from './components/first/Catalog';
import Login from './components/first/Login';
import Registration from './components/first/Registration';
import RootLayout from './components/first/RootLayout';
import { UserContext } from './components/first/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        {/* Default route: redirect to /home or /username */}
        <Route
          path="/"
          element={
            user?.username ? (
              <Navigate to={`/${user.username}`} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />

        <Route element={<RootLayout />}>
          {/* Guest Home route */}
          <Route path="/home" element={<Index />} />

          {/* Logged-in User Home route */}
          <Route path="/:username" element={<Index />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />

          {/* Catalog (protected via Catalog.jsx logic) */}
          <Route path="/catalog/:username" element={<Catalog />} />

          {/* Catch-all fallback route */}
          <Route
            path="*"
            element={
              user?.username ? (
                <Navigate to={`/${user.username}`} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
