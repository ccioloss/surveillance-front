import axios from "axios";

const API_URL = "http://46.101.243.193:3000/";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";

class DataService {
  getChartData() {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
    return axios
      .get(cors_proxy + API_URL + `storage/stats`, {
        headers: headers,
      })
      .then((response) => {
        return response.data;
      });
  }
  getLatestRecordings() {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
    return axios
      .get(cors_proxy + API_URL + `storage/uploads-links`, {
        headers: headers,
      })
      .then((response) => {
        return {
          data: response.data.data,
          totalPages: response.data.totalPages,
        };
      });
  }
  getRecordingList(page) {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
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

  deleteRecording(id) {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
    return axios
      .delete(cors_proxy + API_URL + `storage/upload/${id}`, {
        headers: headers,
      })
      .then((response) => {
        return true;
      })
      .catch((error) => {
        return error.message;
      });
  }

  getDeviceToken() {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
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
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
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
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
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

  filterRecordings(start, end) {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem("token").replace(/['"]+/g, ""), // remove " " from the token
    };
    return axios
      .get(
        cors_proxy +
          API_URL +
          `storage/uploads-links?start=${start}&end=${end}`,
        {
          headers: headers,
        }
      )
      .then((response) => {
        return {
          data: response.data.data,
          totalPages: response.data.totalPages,
        };
      });
  }
}

export default new DataService();
