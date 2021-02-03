import React, { Fragment, useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import Profile from "../../components/profile";
import ProfileCard from "../ProfileCard/ProfileCard";
import Achievement from "../Achievement/Achievement";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Progress() {
  const { currentUser, logout } = useAuth();

  return (
    <Fragment>
      <div className="container">
        <div className="row p-2">
          <div className="col-6">
            <Achievement />
          </div>
          <div className="col-6">
            <ProfileCard />
          </div>
        </div>
        <div className="row">
          <Profile />
        </div>
      </div>
    </Fragment>
  );
}
