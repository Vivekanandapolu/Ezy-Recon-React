import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "../Pages/Home/Home";

const WashInvoiceRoutes = lazy(() => import("./Wash-invoice-Routes"));

export default function HomeRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home/dashboard" />}></Route>
        <Route path="home/dashboard" element={<Home />}></Route>
        <Route path="/home/wash-invoice/*" element={<WashInvoiceRoutes />} />
        <Route path="*" element={<Navigate to="/home/dashboard" />} />
      </Routes>
    </Suspense>
  );
}
