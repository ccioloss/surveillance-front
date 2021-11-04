import axios from "axios";

const API_URL = "http://46.101.243.193:3000/";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";
const headers = {
  "Content-Type": "application/json",
};

class AuthService {
  login(username, password) {
    const data = {
      username: username,
      password: password,
    };

    return axios
      .post(cors_proxy + API_URL + "auth/login", data, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("token", JSON.stringify(response.data.jwt));
        }
        console.log("tok1: " + response.data.jwt);
        return response.data.jwt;
      })
      .catch((error) => {
        return false;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(username, password) {
    return axios
      .post(cors_proxy + API_URL + "auth/register", {
        username,
        password,
      })
      .then((response) => {
        return false;
      })
      .catch((error) => {
        return true;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("token"));
  }
}
export default new AuthService();
