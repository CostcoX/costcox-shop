const axios = require("axios");

class CostcoXRestClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: { "Content-Type": "application/json" },
    });
  }

  async get(url, headers = {}) {
    try {
      const response = await this.client.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async post(url, payload, headers = {}) {
    try {
      const response = await this.client.post(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async put(url, payload, headers = {}) {
    try {
      const response = await this.client.put(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(url, headers = {}) {
    try {
      const response = await this.client.delete(url, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CostcoXRestClient;
