import axios from "axios";

export default {
  // GETS INFO
  getFeed: function(feed) {
    return axios.get("/api/feed", { params: feed });
  },
  getChange: function(change) {
    return axios.get("/api/change/", { params: change });
  },
  getSleep: function(sleep) {
    return axios.get("/api/sleep/", { params: sleep });
  },

  // POSTS INFO
  postChange: function(change) {
    console.log(
      "thsi is the change object for the client post request",
      change
    );
    return axios.post("/api/change/", change);
  },
  postFeed: function(feed) {
    return axios.post("/api/feed/", feed);
  },
  postSleep: function(sleep) {
    return axios.post("/api/sleep/", sleep);
  },
  login: function(login) {
    return axios.post("/api/login", login);
  },
  register: function(register) {
    console.log('register', register)
    return axios.post("/api/register", register);
  }
};
