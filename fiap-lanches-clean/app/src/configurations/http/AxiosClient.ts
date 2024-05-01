import { IHttpClient } from "./IHttpClient";
const axios = require('axios');

class AxiosClient implements IHttpClient {

    post(path: string, body: any): Promise<any> {
        return axios.post(path, body);
    }

    get(path: string): any {
        return axios.get(path);
    }

    put(path: string, body?: any): any {
        if(body){
            return axios.put(path, body)
        }
        return axios.put(path);
    }

}

export { AxiosClient };
