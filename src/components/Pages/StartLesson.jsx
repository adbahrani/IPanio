import React, { Fragment, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";

import LessonComp from "../LessonComp/LessonComp";
import PianoComp from "../Piano/Piano";

export default function Progress() {
  const { currentUser, logout } = useAuth();

  return (
    <Fragment>
      <div className="  container p-2">
        <PianoComp />
      </div>
    </Fragment>
  );
}
