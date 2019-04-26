import axios from "axios";

export default {
  // Gets beer
  getBreweries: searchTerm => {
    return axios.get("https://sandbox-api.brewerydb.com/v2/search?q=" + searchTerm +" /&key=7380497d0148ba2e8a2b2d6ba7362a03");
  },

  createUser: user => {
    console.log("from API", user);
    return axios.post('/api/user/signup', user);
  }
}