import { Request, Response } from "express";
import { GetAllUnfinishedOrdersService } from "../../useCases/impl/order/GetAllUnfinishedOrdersService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { ILogger } from "../../configurations/Logger/ILogger";
import { AxiosClient } from "../../configurations/http/AxiosClient";
import { OrderHttp } from "../../http/impl/OrderHttp";
import { IHttpClient } from "../../configurations/http/IHttpClient";
import { IOrderHttp } from "../../http/interfaces/IOrderHttp";


class GetAllUnfinishedOrdersController {

  public dataSource: IDataSource;
  public logger: ILogger;
  public orderHttp: IOrderHttp;
  public httpClient: IHttpClient;


  constructor(dataSource: IDataSource, logger: ILogger, orderHttp: IOrderHttp, httpClient: IHttpClient) {
    this.dataSource = dataSource;
    this.logger = logger
  }

  handler = async (request: Request, response: Response) => {
    // const orderRepository = new OrderRepository(this.dataSource);

    const getAllUnfinishedOrdersService = new GetAllUnfinishedOrdersService();

    await getAllUnfinishedOrdersService.execute(this.orderHttp, this.httpClient).then(resp => {
      response.status(200).send(resp)
    })
      .catch(error => {
        this.logger.error(`Get orders: ${error.message}`)
        response.status(500).send({ "error": error.message });
      })

    // await getAllUnfinishedOrdersService.execute(orderRepository)
    //   .then(resp => {
    //     response.status(200).send(
    //       {
    //         "message": "Orders found",
    //         "orders": resp
    //       }
    //     )
    //   })
    //   .catch(error => {
    //     this.logger.error(`Get orders: ${error.message}`)
    //     response.status(500).send({ "error": error.message });
    //   })
  }
}

export { GetAllUnfinishedOrdersController };
