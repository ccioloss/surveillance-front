import axios from "axios";

const API_URL = "http://46.101.243.193:3000/";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
};

class DataService {
  getRecordingList(page) {
    return axios
      .get(cors_proxy + API_URL + `storage/uploads-links?page=${page}`, {
        headers: headers,
      })
      .then((response) => {
        return {
          data: response.data.data,
          totalPages: response.data.totalPages,
        };
      });
  }

  getDeviceToken() {
    return axios
      .get(cors_proxy + API_URL + `device/token`, {
        headers: headers,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  }

  deleteDeviceToken() {
    return axios
      .get(cors_proxy + API_URL + `device/delete-token`, {
        headers: headers,
      })
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.log(error.message);
        return error.message;
      });
  }

  generateDeviceToken() {
    return axios
      .get(cors_proxy + API_URL + `device/generate-token`, {
        headers: headers,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
  }
}

export default new DataService();
