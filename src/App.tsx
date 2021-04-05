import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
import { useAuthState, UserProvider } from "./context/userContext";
import { login, logout } from "./services/authService";
import { getUser } from "./services/userService";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>test</h1>
        <Router>
          <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/profile" component={UserProfile}></Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
