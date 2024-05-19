import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IPaymentHttp } from "../../../http/interfaces/IPaymentHttp";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "../order/IGetOrderByIdService";

interface IWebHookPaymentService {
    execute(orderId: string, 
      getOrderByIdUseCase: IGetOrderByIdService, 
      orderRepository: IOrderRepository,
      paymentClient: IPaymentHttp,
      httpClient: IHttpClient
    ): Promise<string>;
  }
  
  export { IWebHookPaymentService };
  