import { Request, Response } from "express";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { CreateOrderService } from "../../useCases/impl/order/CreateOrderService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { GetProductByIdsService } from "../../useCases/impl/product/GetProductByIdsService";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { ILogger } from "../../configurations/Logger/ILogger";
import { OrderHttp } from "../../http/impl/OrderHttp";
import { AxiosClient } from "../../configurations/http/AxiosClient";
import { IOrderHttp } from "../../http/interfaces/IOrderHttp";
import { IHttpClient } from "../../configurations/http/IHttpClient";

class CreateOrderController {

  public dataSource: IDataSource;
  public clientDataSource: IDataSource;
  public productDataSource: IDataSource;
  public logger: ILogger;
  public orderHttp: IOrderHttp;
  public httpClient: IHttpClient;

  constructor(dataSource: IDataSource, clientDataSource: IDataSource, productDataSource: IDataSource, logger: ILogger, orderHttp: IOrderHttp, httpClient: IHttpClient) {
    this.dataSource = dataSource;
    this.clientDataSource = clientDataSource;
    this.productDataSource = productDataSource;
    this.logger = logger;
    this.orderHttp = orderHttp;
    this.httpClient = httpClient;
  }

  handler = async (request: Request, response: Response) => {
    // const orderRepository = new OrderRepository(this.dataSource);
    // const clientRepository = new ClientRepository(this.clientDataSource);
    // const productRepository = new ProductRepository(this.productDataSource);
    // const getProdutBtIdsService = new GetProductByIdsService();
    // const findClientByCpfService = new FindClientByCpfService();

    const createOrderService = new CreateOrderService();

     await createOrderService.execute(request.body, this.orderHttp, this.httpClient).then(resp => {
      response.status(201).send({ "message": "Order created", "orderId": resp });
    }
    ).catch(error => {
      this.logger.error(`Post order: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })

    // await createOrderService.execute(request.body, orderRepository, getProdutBtIdsService, findClientByCpfService, clientRepository, productRepository).then(resp => {
    //   response.status(200).send({ "message": "Order created", "orderId": resp });
    // }
    // ).catch(error => {
    //   this.logger.error(`Post order: ${error.message}`)
    //   response.status(500).send({ "error": error.message });
    // })
  }
}

export { CreateOrderController };
