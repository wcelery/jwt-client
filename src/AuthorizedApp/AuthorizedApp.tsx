import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { login } from "../services/authService";
import { getUser } from "../services/userService";
import UserProfile from "./components/UserProfile";

export default function AuthorizedApp() {
  return (
    <div>
      <h1>this is authorized app</h1>
      <div>
        <button onClick={() => login("wce", "test")}>login</button>
        <button onClick={() => getUser()}>getuser</button>
      </div>

      <UserProfile />
    </div>
  );
}
