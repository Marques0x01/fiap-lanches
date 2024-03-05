
interface IHttpClient {
  post(path: string, body: any): Promise<any>;
  get(path: string): Promise<any>;
}

export { IHttpClient };
