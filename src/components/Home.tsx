import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../services/authService";
import { getUser } from "../services/userService";

export default function Home() {
  return (
    <div>
      this is home
      <button onClick={() => login("wce", "test")}>login</button>
      <button onClick={() => getUser()}>getuser</button>
    </div>
  );
}
