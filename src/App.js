import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import Singup from "./components/signup";
import { AuthProvider } from "./contexts/AuthContext";
import UpdateProfile from "./components/updateProfile";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./components/forgotPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AuthProvider>
          <PrivateRoute path="/" exact component={Main} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Singup} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
