import { Request, Response } from "express";
import { WebHookPaymentService } from "../../useCases/impl/payment/WebHookPaymentService";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ILogger } from "../../configurations/Logger/ILogger";
import { IPaymentHttp } from "../../http/interfaces/IPaymentHttp";
import { IHttpClient } from "../../configurations/http/IHttpClient";

class WebHookPaymentController {

  public dataSourceOrder: IDataSource;
  public logger: ILogger;
  public getOrderByIdService: GetOrderByIdService;
  public orderRepository: OrderRepository;
  public paymentHttp: IPaymentHttp;
  public httpClient: IHttpClient;

  constructor(
    dataSourceOrder: IDataSource,
    logger: ILogger,
    getOrderByIdService: GetOrderByIdService,
    // orderRepository: OrderRepository,
    paymentHttp: IPaymentHttp,
    httpClient: IHttpClient
) {
    this.dataSourceOrder = dataSourceOrder;
    this.logger = logger;
    this.getOrderByIdService = getOrderByIdService;
    // this.orderRepository = orderRepository;
    this.paymentHttp = paymentHttp;
    this.httpClient = httpClient;
}

  // handler = async (request: Request, response: Response) => {
  //   const webHookPaymentService = new WebHookPaymentService();
  //   const getOrderByIdService = new GetOrderByIdService();
  //   const orderRepository = new OrderRepository(this.dataSourceOrder);

  //   webHookPaymentService.execute(request.body.statusCode, request.body.payment.order, getOrderByIdService, orderRepository).then(resp => {
  //     response.status(200).send({ "message": `Order payment processed'}`, "orderId": request.body.payment.order })
  //   }).catch(error => {
  //     this.logger.error(`Webhook payment error: ${error.message}`)
  //     response.status(500).send({ "error": error.message });
  //   })
  // }

  handler = async (request: Request, response: Response) => {

    const webHookPaymentService = new WebHookPaymentService();
    const orderRepository = new OrderRepository(this.dataSourceOrder);

    webHookPaymentService.execute(request.body, 
      this.getOrderByIdService, orderRepository, this.paymentHttp, this.httpClient).then(resp => {
      response.status(200).send({ "message": `Order payment processed'}`, "orderId": request.body.payment.order })
    }).catch(error => {
      this.logger.error(`Webhook payment error: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { WebHookPaymentController };
