import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";

interface IGetAllUnfinishedOrdersService {
    // execute(orderRepository: IOrderRepository): Promise<IOrder[]>;
    execute(httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<IOrder[]>;
}

export {IGetAllUnfinishedOrdersService};