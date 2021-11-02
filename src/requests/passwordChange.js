import axios from "axios";
const cors_proxy = "https://thingproxy.freeboard.io/fetch/";

const headers = {
  "Content-Type": "application/json",
};

export const changePassword = ({ newpassword }) => {
  const data = {
    newpassword: newpassword,
  };

  axios
    .patch(cors_proxy + "http://46.101.243.193:3000/account/update ", data, {
      headers: headers,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
