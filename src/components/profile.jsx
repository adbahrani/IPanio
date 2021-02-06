import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="w-100" sytle={{ maxWidth: "400px" }}>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="text-center pt-2">
        <strong>Email:</strong> {currentUser.email}
      </div>

      <Link to="/update-profile" className="btn btn-primary w-100 mt-1">
        Update Profile
      </Link>
      <div className="w-100 text-center ">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
