import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
interface IGetOrderByStatusService {
  // execute(status: EOrderStatus, orderRepository: IOrderRepository): Promise<IOrder[]>;
  execute(status: EOrderStatus, httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<IOrder[]>;
}

export { IGetOrderByStatusService };
