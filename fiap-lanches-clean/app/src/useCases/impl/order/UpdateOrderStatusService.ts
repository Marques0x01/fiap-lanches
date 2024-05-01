import { injectable, inject } from "tsyringe";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IUpdateOrderStatusService } from "../../interfaces/order/IUpdateOrderStatusService";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";

class UpdateOrderStatusService implements IUpdateOrderStatusService {

  async execute(orderId: string, status: EOrderStatus, httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<string> {
    return httpOrder.updateOrderStatus(orderId, status, httpClient)
  }
  // async execute(orderId: string, status: EOrderStatus, orderRepository: IOrderRepository, getOrderByIdUseCase: IGetOrderByIdService): Promise<string> {
  //   const order: IOrder = await getOrderByIdUseCase.execute(orderId, orderRepository).then(resp => resp);

  //   if (!order) {
  //       throw new CustomError(`Order ${orderId} not found`, 404) 
  //   }

  //   order.status = status
  //   return orderRepository.saveOrUpdate(order);
  // }
}

export { UpdateOrderStatusService };
