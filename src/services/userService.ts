import { CONNECTION } from "./authService";

export const getUser = async () => {
  const user: { access_token: string } = JSON.parse(
    localStorage.getItem("user")!
  ); // '!' means fuck u TS, i know that there's null
  console.log(user);

  const req = await fetch(`${CONNECTION}/api/auth/getprofile`, {
    headers: { Authorization: `Bearer ${user.access_token}` },
  });

  const data = await req.json();
  console.log("data", data);

  return data;
};
