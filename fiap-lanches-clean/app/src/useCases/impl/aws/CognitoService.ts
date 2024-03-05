import { ConfirmClientAccountDto } from "../../../domain/dto/client/ConfirmClientAccountDto";
import { CreateClientDto } from "../../../domain/dto/client/CreateClientDto";
import { LoginClientDto } from "../../../domain/dto/client/LoginClientDto";
import { ICognitoService } from "../../interfaces/aws/ICognitoService";
import { IHttpClient } from "../../../configurations/http/IHttpClient";


class CognitoService implements ICognitoService {

    private httpClient: IHttpClient;
    private apiPath: string = "https://6r62u8s4z5.execute-api.us-east-1.amazonaws.com/prod/fiap-lanches";

    constructor(httpClient: IHttpClient) {
        this.httpClient = httpClient;
    }

    async login(loginBody: LoginClientDto): Promise<any> {
        return await this.httpClient.post(this.apiPath + "/login", loginBody).then(resp => {
            return {
                "status": resp.data.statusCode,
                "message": resp.data.message,
                "cpf": loginBody.cpf,
                "auth": {
                    "token": resp.data.data.AuthenticationResult.AccessToken,
                    "refreshToken": resp.data.data.AuthenticationResult.RefreshToken
                }
            }
        }).catch(error => {
            return {
                "status": error.response.data.error.statusCode,
                "message": error.response.data.error.message,
                "cpf": loginBody.cpf
            }
        });
    }


    async register(registerBody: CreateClientDto): Promise<any> {
        return await this.httpClient.post(this.apiPath + "/create-account", registerBody).then(resp => {
            return {
                "status": resp.data.statusCode,
                "message": resp.data.message,
                "cpf": registerBody.cpf
            }
        }).catch(error => {
            return {
                "status": error.response.data.error.statusCode,
                "message": error.response.data.error.message,
                "cpf": registerBody.cpf
            }
        });
    }


    async confirmEmail(userToConfirmBody: ConfirmClientAccountDto): Promise<any> {
        return await this.httpClient.post(this.apiPath + "/user-confirmation", userToConfirmBody).then(resp => {
            return {
                "status": resp.data.statusCode,
                "message": resp.data.message,
                "cpf": userToConfirmBody.cpf
            }
        }).catch(error => {
            return {
                "status": error.response.data.error.statusCode,
                "message": error.response.data.error.message,
                "cpf": userToConfirmBody.cpf
            }
        });
    }
}

export { CognitoService };
