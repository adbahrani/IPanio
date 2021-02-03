import React, { Fragment, useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Hero from "../components/Hero/hero";
import Features from "./Feautures/features";
import Guide from "../components/Guide/guide";
import Profile from "../components/profile";

export default function Main() {
 
  //const { currentUser, logout } = useAuth();
  const history = useHistory();

 

  return (
    <Fragment>
 

      <div className="home">
        <Hero />
        <Features />
        <Guide />
      </div>
    </Fragment>
  );
}
