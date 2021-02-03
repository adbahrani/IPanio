import React, { Fragment, useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hero from "../components/Hero/hero";
import Features from "./Feautures/features";
import Guide from "../components/Guide/guide";
import Profile from "../components/profile";

export default function Main() {
  const [error, setError] = useState("");
  //const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      //  await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Fragment>
      {/* <Profile /> */}

      <div className="home">
        <Hero />
        <Features />
        <Guide />
      </div>
    </Fragment>
  );
}
