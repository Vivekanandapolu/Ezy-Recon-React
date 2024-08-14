import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Login from "../Components/Auth/Login";
const HomeRoutes = lazy(() => import("./Home-Routes"));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HomeRoutes />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
