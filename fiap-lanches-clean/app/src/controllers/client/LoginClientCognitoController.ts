import { Request, Response } from "express";
import { ILogger } from "../../configurations/Logger/ILogger";
import { CognitoService } from "../../useCases/impl/aws/CognitoService";
import { IHttpClient } from "../../configurations/http/IHttpClient";


class LoginClientCognitoController {
    public logger: ILogger;
    public httpClient: IHttpClient;

    constructor(logger: ILogger, httpClient: IHttpClient) {
        this.logger = logger
        this.httpClient = httpClient
    }

    handler = async (request: Request, response: Response) => {
        const congnitoService = new CognitoService(this.httpClient);
        return await congnitoService.login(request.body).then(resp => {
            return response.status(resp.status).send(resp);
        }).catch(error => {
            return response.status(500).send(error.message);
        });
    }
}

export { LoginClientCognitoController };
