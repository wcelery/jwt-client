import React from "react";
import "./App.css";
import { logout } from "./services/authService";
import { getUser } from "./services/userService";

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <button onClick={getUser}>getuser</button>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default App;
