import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    if (localStorage.getItem("token")) {
      return JSON.parse(localStorage.getItem("token"));
    }
    return;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
