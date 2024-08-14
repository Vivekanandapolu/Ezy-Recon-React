import React from "react";
import { Link } from "react-router-dom";

export default function GlobalDashboard() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home/wash-invoice/dashboard">Dashbord</Link>
          </li>
          <li>
            <Link to="/home/wash-invoice/reconciliation">Reconciliation</Link>
          </li>
          <li>
            <Link to="/home/wash-invoice/supporting-docs">Supporting Docs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
