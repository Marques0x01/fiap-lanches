import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "./IGetOrderByIdService";

interface IUpdateOrderStatusService {
  // execute(orderId: string, orderStatus: EOrderStatus, orderRepository: IOrderRepository, getOrderByIdUseCase: IGetOrderByIdService): Promise<string>;
  execute(orderId: string, status: EOrderStatus, httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<string>;
}

export { IUpdateOrderStatusService };
