
interface IHttpClient {
  post(path: string, body: any): Promise<any>;
  get(path: string): Promise<any>;
  put(path: string, body?: any): Promise<any>;
}

export { IHttpClient };
