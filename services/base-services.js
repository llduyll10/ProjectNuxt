import axios from "axios";
import https from "https";

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const setHeader = () => {
  var token = localStorage.getItem("token");
  instance.defaults.headers.common.Authorization = `Token ${token}`;
};

const setUrl = (url) => {
  if (url.indexOf("http") > -1) {
    return url;
  } else {
    return process.env.API + url;
  }
};

export const getAPI = (url, config) => {
  setHeader();
  url = setUrl(url);
  return instance
    .get(url, config)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const postAPI = (url, data, config) => {
  setHeader();
  url = setUrl(url);
  return instance
    .post(url, data, config)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const deleteAPI = (url, config) => {
  setHeader();
  url = setUrl(url);
  return instance
    .delete(url, config)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};
