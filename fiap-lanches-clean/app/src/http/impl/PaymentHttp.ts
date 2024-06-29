import { IHttpClient } from "../../configurations/http/IHttpClient";
import { IPaymentModel } from "../../domain/models/IPaymentModel";
import { IPaymentHttp } from "../interfaces/IPaymentHttp";

class PaymentHttp implements IPaymentHttp {
    
    private defaultPath = "https://prj22c46id.execute-api.us-east-2.amazonaws.com/prod/fiap-lanches";

    async PostPayment(payment: IPaymentModel, httpClient: IHttpClient): Promise<any> {
        return await httpClient.post(this.defaultPath + '/payment', payment).then(resp => {
            return resp.data
        }).then(data => {
            return data.orderId
        }).catch(err => {
            console.log("Error in calling API: " + err)
            console.log(err)
            throw new Error("Error in calling API: " + err);
        })
        try {
            const response = await httpClient.post(`${this.defaultPath}/payment`, payment);
            return response;
        } catch(error) {
            console.log("Erro ao efetivar pagamento", error);
            throw new Error(error);
        }
    }
}

export { PaymentHttp }