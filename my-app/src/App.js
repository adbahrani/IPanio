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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AuthProvider>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Singup} />
          <Route path="/update-profile" exact component={UpdateProfile} />
          {/* <Route path="/main" component={Main} /> */}
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
