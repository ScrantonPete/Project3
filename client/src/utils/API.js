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
    // console.log("this is the sleep get object", sleep)
    return axios.get("/api/sleep/", { params: sleep });
  },

  // POSTS INFO
  postChange: function(change) {
    // console.log(
    //   "this is the change object for the client post request",
    //   change
    // );
    return axios.post("/api/change/", change);
  },
  postFeed: function(feed) {
    console.log("this is the feed object for the client post request", feed);

    return axios.post("/api/feed/", feed);
  },
  postSleep: function(sleep) {
    console.log("this is the sleep object", sleep)
    return axios.post("/api/sleep/", sleep);
  },
  login: function(login) {
    return axios.post("/api/login", login);
  },
  register: function(register) {
    console.log("register", register);
    return axios.post("/api/register", register);
  }
};
