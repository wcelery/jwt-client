import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CONNECTION, login } from "../services/authService";
import { ICredentials } from "../services/authService";

export const UserContext = React.createContext<IState>({
  status: "loading",
  error: null,
  user: null,
});

export interface IState {
  status: string;
  error: string | null;
  user: ICredentials | null;
}

export const UserProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<IState>({
    status: "loading",
    error: null,
    user: null,
  });

  /* useEffect(() => {
    getUser();
  }, []); */

  const getUser = async () => {
    const user: { access_token: string } = JSON.parse(
      localStorage.getItem("user")!
    ); // '!' means fuck u TS, i know that there's null
    if (user) {
      const req = await fetch(`${CONNECTION}/api/auth/getprofile`, {
        headers: { Authorization: `Bearer ${user.access_token}` },
      });
      if (req.ok) {
        const data = await req.json();
        console.log("data", data);

        setState({ status: "success", error: null, user: data });
      } else {
        setState({ status: "error", error: req.statusText, user: null });
      }
    } else {
      return "0 users in localstorage";
    }
  };

  return (
    <UserContext.Provider value={state}>
      {/* {state.status === "pending" ? (
        "Loading..."
      ) : state.status === "error" ? (
        <div>
          Oh no
          <div>
            <pre>{state.error}</pre>
            <Link to="/">back home</Link>
          </div>
        </div>
      ) : (
        children
      )} */}
      {state.status === "pending" ? "Loading..." : children}
    </UserContext.Provider>
  );
};
export function useAuthState() {
  //hook to access fields from consumers, instead of useContext()
  const state = React.useContext(UserContext);
  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
