import axios from "axios";

// The getBeers method retrieves Beers from the server
// It accepts a "query" or term to search the Beer api for
export default {
  getBeers: function(query) {
    return axios.get("/api/Beers", { params: { q: query } });
  }
};
