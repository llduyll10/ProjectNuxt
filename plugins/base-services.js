import axios from "axios";
import https from "https";
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const setHeader = (context) => {
  var token = context.$auth.strategy.token.get();
  if(token){
      instance.defaults.headers.common.Authorization = token;
  }
};

const setUrl = (url) => {
  if (url.indexOf("http") > -1 || url.indexOf("https") > -1) {
    return url;
  } else {
    return process.env.API + url;
  }
};


export default (context, inject) =>{
  const getAPI = (url, config) => {
    setHeader(context);
    url = setUrl(url);
    return instance
      .get(url, config)
      .then((res) => res)
      .catch((error) => {
        throw error;
      });
  };
  const postAPI = (url, data, config) => {
    setHeader(context);
    url = setUrl(url);
    return instance
      .post(url, data, config)
      .then((res) => res)
      .catch((error) => {
        throw error;
      });
  };
  const deleteAPI = (url, config) => {
    setHeader(context);
    url = setUrl(url);
    return instance
      .delete(url, config)
      .then((res) => res)
      .catch((error) => {
        throw error;
      });
  };
  inject('get', getAPI)
  inject('post',postAPI)
  inject('del',deleteAPI)
}