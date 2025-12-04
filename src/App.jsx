import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispach = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispach(login(userData));
        } else {
          dispach(logout());
        }
      })
      .finally(() => setLoading(false));
  });
  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap items-item bg-gray-400">
        <div className="w-full block">
          <header>
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  ) : null;
};

export default App;
