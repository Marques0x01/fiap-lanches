import { injectable, inject } from "tsyringe";
import { IProduct } from "../../../domain/models/IProductModel";
import { ProductMapper } from "../../../adapters/mappers/ProductMapper"
import { CreateProductDTO } from "../../../adapters/dtos/product/CreateProductDTO";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { ICreateOrUpdateProductService } from "../../interfaces/product/ICreateOrUpdateProductService";

@injectable()
class CreateOrUpdateProductService implements ICreateOrUpdateProductService {
  constructor(
    @inject("ProductRepository") private productRepository: IProductRepository
  ) { }


  execute(product: CreateProductDTO): Promise<string> {
    const productEntity = ProductMapper.mapperCreateProductDTOToEntity(product)
    productEntity.promotionValue = productEntity.promotionValue ? productEntity.promotionValue : null
    productEntity.createdAt = productEntity.createdAt ? productEntity.createdAt : new Date();
    return this.productRepository.saveOrUpdate(productEntity);
  }
}

export { CreateOrUpdateProductService };
