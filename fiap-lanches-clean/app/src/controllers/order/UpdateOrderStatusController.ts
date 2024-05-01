import { Request, Response } from "express";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { UpdateOrderStatusService } from "../../useCases/impl/order/UpdateOrderStatusService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { ILogger } from "../../configurations/Logger/ILogger";
import { OrderHttp } from "../../http/impl/OrderHttp";
import { AxiosClient } from "../../configurations/http/AxiosClient";
import { IHttpClient } from "../../configurations/http/IHttpClient";
import { IOrderHttp } from "../../http/interfaces/IOrderHttp";

class UpdateOrderStatusController {

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
        // const getOrderByIdService = new GetOrderByIdService();
        const updateOrderStatus = new UpdateOrderStatusService();

        // await updateOrderStatus.execute(request.query.id as string, request.query.status as EOrderStatus, orderRepository, getOrderByIdService).then(resp => {
        await updateOrderStatus.execute(request.query.id as string, request.query.status as EOrderStatus, this.orderHttp, this.httpClient).then(resp => {
            response.status(200).send(resp);
        }
        ).catch(error => {
            this.logger.error(`Put order status: ${error.message}`)
            response.status(error.status ? error.status : 500).send({ "error": error.message })
        })
    }
}

export { UpdateOrderStatusController };
