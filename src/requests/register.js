import axios from "axios";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";

const headers = {
  "Content-Type": "application/json",
};

export const registerRequest = ({ username, password }) => {
  const data = {
    username: username,
    password: password,
  };

  axios
    .post(cors_proxy + "http://46.101.243.193:3000/auth/register", data, {
      headers: headers,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
