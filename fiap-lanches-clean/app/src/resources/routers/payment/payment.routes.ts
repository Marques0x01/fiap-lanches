import { Router } from "express";
import { GetPaymentStatusByOrderIdController } from "../../../controllers/payment/GetPaymentStatusByOrderIdController";
import { UpdatePaymentController } from "../../../controllers/payment/UpdatePaymentController";
import { WebHookPaymentController } from "../../../controllers/payment/WebHookPaymentController";
import { validateQuery, validateBody } from "../../midleware/validator/validate";
import { paymentByOrderIdSchema, webHookPaymentSchema } from "../../schemas/PaymentSchemas";
import { AppDataSource } from "../../../configurations/DataSource";
import { Order } from "../../../configurations/DataSourceModelation/OrderEntityConfig";
import { TypeOrmDataSource } from "../../../repositories/dataSource/TypeOrmDataSource";
import { LoggerImpl } from "../../../configurations/Logger/LoggerImpl";
import { GetOrderByIdService } from "../../../useCases/impl/order/GetOrderByIdService";
import { PaymentHttp } from "../../../http/impl/PaymentHttp";
import { AxiosClient } from "../../../configurations/http/AxiosClient";

const paymentRouter = Router();

const logger = new LoggerImpl();
const orderDataSource = AppDataSource.getRepository(Order);
const typeOrmDataSourceOrder = new TypeOrmDataSource(orderDataSource);
const getOrderByIdService = new GetOrderByIdService();
const paymentHttp = new PaymentHttp();
const httpClient = new AxiosClient()

const updatePaymentController = new UpdatePaymentController(typeOrmDataSourceOrder);
const webHookPaymentController = new WebHookPaymentController(typeOrmDataSourceOrder, logger, getOrderByIdService, paymentHttp, httpClient);
const getPaymentStatusByOrderIdController = new GetPaymentStatusByOrderIdController(typeOrmDataSourceOrder, logger);

/**
* @swagger
 * /api/v1/payments:
 *   put:
 *     summary: Update order payment
 *     tags:
 *       - Payments
 *     description: Update order payment based in payload provided.
 *     parameters:
 *       - in: query
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id that is going to be updated
 *     responses:
 *       '200':
 *         description: Order updated
 *       '400':
 *         description: Bad payload given to API
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */
paymentRouter.put(
  "/",
  validateQuery(paymentByOrderIdSchema),
  updatePaymentController.handler
);

/**
* @swagger
 * /api/v1/payments:
 *   get:
 *     summary: Get payments status by order id
 *     tags:
 *       - Payments
 *     description: Get payments status with order id provided.
 *     parameters:
 *       - in: query
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id that is going to be recovered
 *     responses:
 *       '200':
 *         description: Payment order status recovered
 *       '400':
 *         description: Bad payload given to API
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */
paymentRouter.get(
  "/",
  validateQuery(paymentByOrderIdSchema),
  getPaymentStatusByOrderIdController.handler
);



/**
* @swagger
 * /api/v1/payments/webhook:
 *   post:
 *     summary: Receive data from payment services to update order status
 *     tags:
 *       - Payments
 *     description: Update order payment based in payload provided.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statusCode:
 *                 type: number
 *                 description: Status code from payment processed
 *                 required: true
 *               message:
 *                 type: string
 *                 description: Message returned from payment service.
 *               payer:
 *                 type: object
 *                 properties:
 *                   name:
 *                      type: string
 *                      description: Payer's name
 *                   document:
 *                      type: string
 *                      description: Payer's document
 *                   email:
 *                      type: string
 *                      description: Payer's email
 *                   bank:
 *                      type: string
 *                      description: Bank used in payment
 *               payment:
 *                 type: object
 *                 properties:
 *                   order:
 *                      type: string
 *                      description: Order's ID
 *                   paidAt:
 *                      type: string
 *                      description: Payment datetime
 *                   value:
 *                      type: number
 *                      description: Value to be paid
 *                   paymentMethod:
 *                      type: string
 *                      description: Payment method
 *     responses:
 *       '200':
 *         description: Order updated
 *       '400':
 *         description: Bad payload given to API
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */
paymentRouter.post(
  "/webhook",
  validateBody(webHookPaymentSchema),
  webHookPaymentController.handler
);

export { paymentRouter };

