import axios from "axios";

/**
     * General utility for making HTTP request, based in Axios
     *
     * @param {string} url
     * @param {Method} method
     * @param {object} body
     * @param {string} [bearer]
     * @returns
     * @memberof UtilService
     */
function callHttpRequest(url, method, body, bearer ) {
  const config = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      url,
      method,
      data: body
  };
  if (bearer) {
      config.headers.Authorization = `Bearer ${bearer}`;
  }

  // return this.http.request(config).toPromise();
  return axios(config).then(response => response.data)
  .catch(e => {
      console.error(`[ERROR IN HTTPREQUEST]` + JSON.stringify(e.message));
      return {data: e.message };
  });
}

export { callHttpRequest }