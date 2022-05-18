const axios = require("axios");

class duckduckgoAPI {
  async getResponse(q) {
    const response = axios.get(
      `https://api.duckduckgo.com/?q=${q}&format=json&pretty=1`
    );
    return response;
  }

  async getData(q) {
    const response = await this.getResponse(q);
    return response.data;
  }
}

module.exports = new duckduckgoAPI();
