import { container } from "tsyringe";
import { IProductRepository } from "../repositories/interfaces/IProductRepository";
import { ProductRepository } from "../repositories/impl/ProductRepository";
import { ClientRepository } from "../repositories/impl/ClientRepository";
import { IClientRepository } from "../repositories/interfaces/IClientRepository";
import { OrderRepository } from "../repositories/impl/OrderRepository";
import { IOrderRepository } from "../repositories/interfaces/IOrderRepository";
import { IEmployeeRepository } from "../repositories/interfaces/IEmployeeRepository";
import { EmployeeRepository } from "../repositories/impl/EmployeeRepository";
import { IPromotionRepository } from "../repositories/interfaces/IPromotionRepository";
import { PromotionRepository } from "../repositories/impl/PromotionRepository";
import { FindClientByCpfService } from "../useCases/impl/client/FindClientByCpfService";
import { GetAllUnfinishedOrdersService } from "../useCases/impl/order/GetAllUnfinishedOrdersService";
import { GetOrderByIdService } from "../useCases/impl/order/GetOrderByIdService";
import { GetPaymentStatusByOrderIdService } from "../useCases/impl/payment/GetPaymentStatusByOrderIdService";
import { WebHookPaymentService } from "../useCases/impl/payment/WebHookPaymentService";
import { CreateOrUpdateProductService } from "../useCases/impl/product/CreateOrUpdateProductService";
import { GetProductByIdService } from "../useCases/impl/product/GetProductByIdService";
import { GetProductByIdsService } from "../useCases/impl/product/GetProductByIdsService";
import { CancelPromotionService } from "../useCases/impl/promotion/CancelPromotionService";
import { CreateOrUpdatePromotionService } from "../useCases/impl/promotion/CreateOrUpdatePromotionService";
import { GetActivePromotionsByProductIdService } from "../useCases/impl/promotion/GetActivePromotionsByProductIdService";
import { GetPromotionByIdService } from "../useCases/impl/promotion/GetPromotionByIdService";
import { IFindClientByCpfService } from "../useCases/interfaces/client/IFindClientByCpfService";
import { IGetAllUnfinishedOrdersService } from "../useCases/interfaces/order/IGetAllUnfinishedOrdersService";
import { IGetOrderByIdService } from "../useCases/interfaces/order/IGetOrderByIdService";
import { IGetPaymentStatusByOrderIdService } from "../useCases/interfaces/payment/IGetPaymentStatusByOrderIdService";
import { IWebHookPaymentService } from "../useCases/interfaces/payment/IWebHookPaymentService";
import { ICreateOrUpdateProductService } from "../useCases/interfaces/product/ICreateOrUpdateProductService";
import { IGetProductByIdService } from "../useCases/interfaces/product/IGetProductByIdService";
import { IGetProductByIdsService } from "../useCases/interfaces/product/IGetProductByIdsService";
import { ICancelPromotionService } from "../useCases/interfaces/promotion/ICancelPromotionService";
import { ICreateOrUpdatePromotionService } from "../useCases/interfaces/promotion/ICreateOrUpdatePromotionService";
import { IGetActivePromotionsByProductIdService } from "../useCases/interfaces/promotion/IGetActivePromotionsByProductIdService";
import { IGetPromotionByIdService } from "../useCases/interfaces/promotion/IGetPromotionByIdService";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
);

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);

container.registerSingleton<IPromotionRepository>(
  "PromotionRepository",
  PromotionRepository
);

container.registerSingleton<IEmployeeRepository>(
  "EmployeeRepository",
  EmployeeRepository
);

container.registerSingleton<IFindClientByCpfService>(
  "FindClientByCpfService",
  FindClientByCpfService
);

container.registerSingleton<IGetProductByIdService>(
  "GetProductByIdService",
  GetProductByIdService
);

container.registerSingleton<IGetProductByIdsService>(
  "GetProductByIdsService",
  GetProductByIdsService
);

container.registerSingleton<IGetProductByIdsService>(
  "GetProductByIdsService",
  GetProductByIdsService
);

container.registerSingleton<IGetOrderByIdService>(
  "GetOrderByIdService",
  GetOrderByIdService
);

container.registerSingleton<IGetActivePromotionsByProductIdService>(
  "GetActivePromotionsByProductIdService",
  GetActivePromotionsByProductIdService
);

container.registerSingleton<IGetPromotionByIdService>(
  "GetPromotionByIdService",
  GetPromotionByIdService
);

container.registerSingleton<ICancelPromotionService>(
  "CancelPromotionService",
  CancelPromotionService
);

container.registerSingleton<ICreateOrUpdatePromotionService>(
  "CreateOrUpdatePromotionService",
  CreateOrUpdatePromotionService
);

container.registerSingleton<ICreateOrUpdateProductService>(
  "CreateOrUpdateProductService",
  CreateOrUpdateProductService
);

container.registerSingleton<IGetAllUnfinishedOrdersService>(
  "GetAllUnfinishedOrdersService",
  GetAllUnfinishedOrdersService
)

container.registerSingleton<IWebHookPaymentService>(
  "WebHookPaymentService",
  WebHookPaymentService
)

container.registerSingleton<IGetPaymentStatusByOrderIdService>(
  "GetPaymentStatusByOrderIdService",
  GetPaymentStatusByOrderIdService
)


export { container };
