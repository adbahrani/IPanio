import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Pages/Main";
import Login from "./components/Pages/Login";
import Singup from "./components/signup";
import { AuthProvider } from "./contexts/AuthContext";
import UpdateProfile from "./components/updateProfile";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./components/forgotPassword";

import Progress from "./components/Pages/Progress";
import Lessons from "./components/Pages/Lessons";
import StartLesson from "./components/Pages/StartLesson";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AuthProvider>
          <PrivateRoute path="/" exact component={Main} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/profile" component={Progress} />
          <PrivateRoute path="/lessons" component={Lessons} />
          <PrivateRoute path="/startLesson" component={StartLesson} />

          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Singup} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
