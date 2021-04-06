import { useContext, useState } from "react";
import { useAuthState, UserContext } from "../../context/userContext";

export default function UserProfile() {
  const { isAuthenticated } = useAuthState();
  const [state, setstate] = useState(false);
  console.log(isAuthenticated);
  return (
    <div>
      <button
        onClick={() => {
          setstate(!state);
        }}
      >
        toggle
      </button>
      {state ? "tets" : "no"}
    </div>
  ); /* isAuthenticated ? <h1>user</h1> : <h1>no user</h1>; */
}
