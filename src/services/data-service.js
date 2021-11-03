import axios from "axios";

const API_URL = "http://46.101.243.193:3000/";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";

class DataService {
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
}

export default new DataService();
