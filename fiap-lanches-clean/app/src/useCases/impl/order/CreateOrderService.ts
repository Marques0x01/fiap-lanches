// import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
// import { IOrder } from "../../../domain/models/IOrderModel";
// import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
// import { IGetProductByIdsService } from "../../interfaces/product/IGetProductByIdsService";
// import { IFindClientByCpfService } from "../../interfaces/client/IFindClientByCpfService";
// import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
// import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";
import { ICreateOrderService } from "../../interfaces/order/ICreateOrderService";

class CreateOrderService implements ICreateOrderService {

  // async execute(order, orderRepository: IOrderRepository, getProducts: IGetProductByIdsService, findClient: IFindClientByCpfService, clientRepository: IClientRepository, productRepository: IProductRepository): Promise<string> {

  //   const client = order.clientCpf ? await findClient.execute(order.clientCpf, clientRepository).then(resp => resp) : null

  //   const order_created = {
  //     value: order.value,
  //     products: await getProducts.execute(order.productsIds, productRepository).then(resp => resp),
  //     startedAt: new Date(),
  //     deliveredAt: null,
  //     status: EOrderStatus.RECEIVED,
  //     client: client
  //   } as IOrder

  //   return orderRepository.saveOrUpdate(order_created);
  // }

  async execute(order, httpOrder: IOrderHttp, httpClient: IHttpClient): Promise<string> {
    return httpOrder.createOrder(order, httpClient)
  }
}

export { CreateOrderService };
