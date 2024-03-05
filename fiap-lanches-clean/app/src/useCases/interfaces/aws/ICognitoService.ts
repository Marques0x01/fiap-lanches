import { ConfirmClientAccountDto } from "../../../domain/dto/client/ConfirmClientAccountDto";
import { CreateClientDto } from "../../../domain/dto/client/CreateClientDto";
import { LoginClientDto } from "../../../domain/dto/client/LoginClientDto";

interface ICognitoService {
    login(loginBody: LoginClientDto): Promise<void>;
    confirmEmail(userToConfirmBody: ConfirmClientAccountDto): Promise<void>;
    register(registerBody: CreateClientDto): Promise<void>;
}

export { ICognitoService };
