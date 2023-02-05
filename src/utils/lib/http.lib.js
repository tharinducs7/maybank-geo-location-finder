import axios from "axios";

class HttpClient {
  method;
  url;
  domain;
  token;
  data;

  constructor() {
    this.method = "GET";
    this.domain = "";
    this.url = "";
    this.token = "";
    this.data = {};
  }

  setDomain(domain) {
    this.domain = domain;
    return this;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  setData(data) {
    this.data = data;
    return this;
  }

  setToken(token) {
    this.token = `Bearer ${token}`;
    return this;
  }

  setTokenHeader(token) {
    this.token = token;
    return this;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  unsetData() {
    this.data = [];
    return this;
  }

  async request() {
    try {
      let url = `${this.url}`;
      
      const headers = {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
      };

      if (this.token !== undefined) {
        headers.Authorization = this.token;
      }

      const config = {
        url,
        headers,
        method: this.method,
        data: this.data || {},
      };

      const response = await axios(config);
      this.unsetData();

      return response;
    } catch ({ response }) {
      this.unsetData();

      return response;
    }
  }
}

export default new HttpClient();
