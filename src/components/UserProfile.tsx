import { useContext } from "react";
import { useAuthState, UserContext } from "../context/userContext";

export default function UserProfile() {
  const user = useAuthState();
  console.log(user);
  return <h1>this is profile</h1>;
}
