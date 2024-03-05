import { IHttpClient } from "./IHttpClient";
const axios = require('axios');

class AxiosClient implements IHttpClient {

    post(path: string, body: any): Promise<any> {
        return axios.post(path, body);
    }

    get(path: string): any {
        return axios.get(path);
    }

}

export { AxiosClient };
