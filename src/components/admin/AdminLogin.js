import React from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <div className="user-title-container">
      <Link to={"/admin/contacts"}>
        <div className="admin-login-container">
          <button className="btn admin-panel-btn">
            <h6>Take me to the</h6>
            <h4>Admin-Panel</h4>
          </button>
        </div>
      </Link>
    </div>
  );
}
