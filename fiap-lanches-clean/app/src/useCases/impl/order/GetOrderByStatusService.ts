
import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByStatusService } from "../../interfaces/order/IGetOrderByStatusService";

class GetOrderByStatusService implements IGetOrderByStatusService {

    execute(status: EOrderStatus, httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<IOrder[]> {
        return httpOrder.getOrderByStatus(status, httpClient)
    }

    // execute(status: EOrderStatus, orderRepository: IOrderRepository): Promise<IOrder[]> {
    //     return orderRepository.getByStatus(status);
    // }
}
export { GetOrderByStatusService };