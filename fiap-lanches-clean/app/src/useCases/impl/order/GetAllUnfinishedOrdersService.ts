import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetAllUnfinishedOrdersService } from "../../interfaces/order/IGetAllUnfinishedOrdersService";

class GetAllUnfinishedOrdersService implements IGetAllUnfinishedOrdersService {

    // async execute(orderRepository: IOrderRepository): Promise<IOrder[]> {
    //     return orderRepository.getAllUnfinishedOrders();
    // }

    async execute(httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<IOrder[]> {
        return httpOrder.getAllUnfinishedOrders(httpClient)
    }
}

export { GetAllUnfinishedOrdersService };