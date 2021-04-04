export const CONNECTION = process.env.REACT_APP_CONNECTION_STRING;

/* export interface ICredentials {
    username: string,
    email?: string,
    password:string
} */

export const login = async (username: string, password: string) => {
  const user = { username, password };
  const response = await fetch(`${CONNECTION}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  localStorage.setItem("user", JSON.stringify(data));

  return data;
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const user = { username, email, password };

  const response = await fetch(`${CONNECTION}/api/auth/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
