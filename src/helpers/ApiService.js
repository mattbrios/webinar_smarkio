import axios from "axios";

class ApiService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || "https://api-sa.smark.io/v1/1d3e7dd889b4c633dd8ade8c3feccf68290a3462";
    
    this.defaultAxios = axios.create({
      baseURL: this.baseUrl,
    });

    // this.user = {};
    this.defaultAxios.interceptors.response.use(
      (response) => response,
      (error) => {
        // if (error && error.response.status === 401) {
        //   window.location.replace("/");
        // } else if (error.response.status === 406) {
        //   return error;
        // }
        return Promise.reject(error);
      }
    );
  }

  async get(suffix, params) {
    return await this.defaultAxios.get(suffix, { params });
  }

  async post(suffix, params) {
    return await this.defaultAxios.post(suffix, params,
      { headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
      }
    });
  }

  async delete(suffix, params) {
    return await this.defaultAxios.delete(suffix, params);
  }

  async patch(suffix, params) {
    return await this.defaultAxios.patch(suffix, params);
  }
}

export default new ApiService();
