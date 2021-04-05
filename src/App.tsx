import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
