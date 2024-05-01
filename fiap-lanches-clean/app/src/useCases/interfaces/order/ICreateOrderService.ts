import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderHttp } from "../../../http/interfaces/IOrderHttp";
// import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
// import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
// import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
// import { IFindClientByCpfService } from "../client/IFindClientByCpfService";
// import { IGetProductByIdsService } from "../product/IGetProductByIdsService";

interface ICreateOrderService {
  // execute(order: IOrder, orderRepository: IOrderRepository, getProducts: IGetProductByIdsService, findClient: IFindClientByCpfService, clientRepository: IClientRepository, productRepository: IProductRepository): Promise<string>;

  execute(order: IOrder, httpOrder: IOrderHttp, httpClient: IHttpClient)
}

export { ICreateOrderService };
