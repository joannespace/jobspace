import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RequireAuth from "../contexts/RequireAuth";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import JobDetails from "../pages/JobDetails";
import LoginPage from "../pages/LoginPage";

function Router() {
  const location = useLocation();
  // console.log("location from Router", location);
  const state = location.state;

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path=":jobId"
            element={
              <RequireAuth>
                <JobDetails />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
