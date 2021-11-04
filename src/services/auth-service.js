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
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(username, password) {
    return axios.post(cors_proxy + API_URL + "auth/register", {
      username,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("token"));
  }

  changePassword(newpassword) {
    const data = {
      newpassword: newpassword,
    };

    return axios
      .patch(cors_proxy + API_URL + "account/update ", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
        },
      })
      .then((response) => {
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        console.log(error.message);
        return error.message;
      });
  }

  changeUsername(newusername) {
    const data = {
      newusername: newusername,
    };

    return axios
      .patch(cors_proxy + API_URL + "account/update ", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
        },
      })
      .then((response) => {
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        console.log(error.message);
        return error.message;
      });
  }

  deleteAccount(password) {
    const data = {
      password: password,
    };
    return axios
      .delete(cors_proxy + API_URL + "account/delete", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
        },
        data,
      })
      .then((response) => {
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        console.log("error");
        return error.message;
      });
  }
}
export default new AuthService();
