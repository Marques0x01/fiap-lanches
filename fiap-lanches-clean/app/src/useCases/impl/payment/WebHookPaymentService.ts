import { EOrderPayment } from "../../../domain/enums/EPayment";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IWebHookPaymentService } from "../../interfaces/payment/IWebHookPaymentService";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";
import { IOrder } from "../../../domain/models/IOrderModel";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { IPaymentHttp } from "../../../http/interfaces/IPaymentHttp";
import { IHttpClient } from "../../../configurations/http/IHttpClient";
import { IPaymentModel } from "../../../domain/models/IPaymentModel";

class WebHookPaymentService implements IWebHookPaymentService {


//   async execute(statusCode: number, orderId: string, getOrderByIdUseCase: IGetOrderByIdService, orderRepository: IOrderRepository): Promise<string> {
//     let paymentStatus: EOrderPayment = statusCode == 200 ? EOrderPayment.APPROVED : EOrderPayment.REFUSED;

//     const order: IOrder = await getOrderByIdUseCase.execute(orderId, orderRepository).then(resp => {
//       return resp
//     });

//     if (!order) {
//       throw new CustomError(`Order ${orderId} not found`, 404)
//     }

//     order.payment = paymentStatus;
//     return orderRepository.saveOrUpdate(order);
//   }
// }

  async execute(orderRequestBody: any, 
                getOrderByIdUseCase: IGetOrderByIdService, 
                orderRepository: IOrderRepository,
                paymentClient: IPaymentHttp,
                httpClient: IHttpClient): Promise<string> {

    const order: IOrder = await getOrderByIdUseCase.execute(orderRequestBody.payment.order, orderRepository).then(resp => {
      return resp
    });

    if (!order) {
      throw new CustomError(`Order ${orderRequestBody.payment.order} not found`, 404)
    }

    const paymentBody: IPaymentModel = {
      id_client: orderRequestBody.payer.document,
      id_order: orderRequestBody.payment.order,
      payment_method: orderRequestBody.payment.paymentMethod,
      order_value: order.value.toString()
    };
    const paymentResponse = await paymentClient.PostPayment(paymentBody, httpClient);
    console.log(paymentResponse)
    let paymentStatus: EOrderPayment = !paymentResponse.ok ? EOrderPayment.REFUSED : EOrderPayment.APPROVED;
    console.log(paymentStatus)
    order.payment = paymentStatus;
    return orderRepository.saveOrUpdate(order);
  }
}

export { WebHookPaymentService };
