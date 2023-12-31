import { injectable, inject } from "tsyringe";
import { IProduct } from "../../../domain/entities/IProduct.entity";
import { IProductRepository } from "../../ports/out/product/IProduct.repository";
import { ICreateOrUpdateProductUseCase } from "../../ports/in/product/ICreateOrUpdateProductUseCase";

@injectable()
class CreateOrUpdateProductUseCase implements ICreateOrUpdateProductUseCase {
  constructor(
    @inject("ProductRepository") private productRepository: IProductRepository
  ) { }


  execute(product: IProduct): Promise<string> {
    product.promotionValue = product.promotionValue ? product.promotionValue : null
    product.createdAt = product.createdAt ? product.createdAt : new Date();
    return this.productRepository.saveOrUpdate(product);
  }
}

export { CreateOrUpdateProductUseCase };
