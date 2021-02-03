import React, { Fragment, useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import Profile from "../../components/profile";
import ProfileCard from "../ProfileCard/ProfileCard";
import Achievement from "../Achievement/Achievement";
import ProgressBar from "../ProgressBar/ProgressBar";

import LessonComp from "../LessonComp/LessonComp";

export default function Progress() {
  const { currentUser, logout } = useAuth();

  return (
    <Fragment>
      <div className="  container p-2">
        <div className="row pt-2 mt-4">
          <div className="col-3">
            <LessonComp no="1" />
          </div>
          <div className="col-3">
            <LessonComp no="2" />
          </div>
          <div className="col-3">
            <LessonComp no="3" />
          </div>
          <div className="col-3">
            <LessonComp no="4" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
