import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const NewsURL = {
  method: "GET",
  url:
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
  params: {
    q: "broadway",
    pageNumber: "1",
    pageSize: "50",
    autoCorrect: "true",
    fromPublishedDate: "null",
    toPublishedDate: "null",
    withThumbnails: "true",
  },
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  },
};

export default {
  getNews: function () {
    return axios.request(NewsURL);
  },
  login: function (data) {
    // console.log('hit ', data)
    return axios.post("/auth/login", data);
  },
  signup: function (data) {
    // console.log('hit ', data)
    return axios.post("/auth/signup", data);
  },
  getUser: function (data) {
    // console.log('hit ', data)
    return axios.get("/auth/user", data);
  },
};
