import { EOrderStatus } from "../enums/EOrderStatus";
import { EOrderPayment } from "../enums/EPayment";
import { IClient } from "./IClientModel";
import { IProduct } from "./IProductModel";

interface IOrder {
  id?: string;
  value: number;
  products: IProduct[];
  startedAt: Date;
  deliveredAt: Date;
  status: EOrderStatus;
  payment?: EOrderPayment;
  client: IClient;
}

export { IOrder };
