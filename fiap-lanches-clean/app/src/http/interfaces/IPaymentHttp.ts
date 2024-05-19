import { IHttpClient } from "../../configurations/http/IHttpClient";
import { IPaymentModel } from "../../domain/models/IPaymentModel";

interface IPaymentHttp{
    PostPayment(payment: IPaymentModel, httpClient: IHttpClient)
}

export {IPaymentHttp}