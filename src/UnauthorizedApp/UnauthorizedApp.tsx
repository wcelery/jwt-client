import { Link, Route, Switch } from "react-router-dom";
import { login } from "../services/authService";
import { getUser } from "../services/userService";
import RegisterForm from "./components/RegisterForm";

export default function UnauthorizedApp() {
  return (
    <div className="App">
      <h1>this is unauthorized app</h1>
      <div>
        <button onClick={() => login("wce", "test")}>login</button>
        <button onClick={() => getUser()}>getuser</button>
        <Link to="/register">tet</Link>
      </div>

      <Switch>
        <Route path="/register" component={RegisterForm}></Route>
      </Switch>
    </div>
  );
}
