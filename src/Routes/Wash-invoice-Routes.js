import { Navigate, Route, Routes } from "react-router-dom";
import WashInvoice from "../Pages/WashInvoiceModule/wash-Invoice";
import Dashboard from "../Pages/WashInvoiceModule/wash-dashboard";
import Reconciliation from "../Pages/WashInvoiceModule/reconciliation";
import SupportingDocs from "../Pages/WashInvoiceModule/supporting_docs";
export default function WashInvoiceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WashInvoice />}>
        <Route index element={<Navigate to="/home/wash-invoice/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reconciliation" element={<Reconciliation />} />
        <Route path="supporting-docs" element={<SupportingDocs />} />
        <Route path="*" element={<Navigate to="/home/dashboard" />} />
      </Route>
    </Routes>
  );
}
