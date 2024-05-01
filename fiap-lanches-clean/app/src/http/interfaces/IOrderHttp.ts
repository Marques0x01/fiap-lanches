import { IHttpClient } from "../../configurations/http/IHttpClient";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";

interface IOrderHttp {
    createOrder(order, httpClient: IHttpClient)
    getAllUnfinishedOrders(httpClient: IHttpClient)
    getOrderByStatus(status: EOrderStatus, httpClient: IHttpClient)
    updateOrderStatus(orderId: string, status: EOrderStatus, httpClient: IHttpClient)


}

export { IOrderHttp };
