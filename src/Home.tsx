import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthorizedApp from "./AuthorizedApp/AuthorizedApp";
import UnauthorizedApp from "./UnauthorizedApp/UnauthorizedApp";
import { useAuthState } from "./context/userContext";
import { login } from "./services/authService";
import { getUser } from "./services/userService";

export default function Home() {
  const { user } = useAuthState();
  console.log(user);

  return user ? <AuthorizedApp /> : <UnauthorizedApp />;
}
