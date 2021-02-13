// import axios from "axios";

// // const newsApiKeyHidden = process.env.NEWS_API_KEY;

// const newsApiKey = "c20dd1de26954654be5226fb76eaa7f9";
// const NewsURL =
//   "https://newsapi.org/v2/everything?q=broadway&pageSize=100&sortBy=relevancy&apiKey=" +
//   `${newsApiKey}`;

// export default {
//   getNews: function () {
//     return axios.get(NewsURL);
//   },
// };

import axios from "axios";

const NewsURL = {
  method: "GET",
  url:
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
  params: {
    q: "broadway",
    pageNumber: "1",
    pageSize: "100",
    autoCorrect: "true",
    fromPublishedDate: "null",
    toPublishedDate: "null",
    withThumbnails: "true",
  },
  headers: {
    "x-rapidapi-key": "0d5297b36amsh0d9567bbb93ae32p128694jsn8344395cd855",
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  },
};

export default {
  getNews: function () {
    return axios.request(NewsURL);
  },
};
