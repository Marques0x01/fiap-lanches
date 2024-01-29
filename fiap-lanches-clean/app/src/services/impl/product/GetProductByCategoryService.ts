import { inject, injectable } from "tsyringe";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByCategoryService } from "../../interfaces/product/IGetProductByCategoryService";
import { ProductMapper } from "../../../adapters/mappers/ProductMapper";
import { ProductDTO } from "../../../adapters/dtos/product/ProductDTO";

@injectable()
class GetProductByCategoryService implements IGetProductByCategoryService {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    async execute(category: EProductCategory): Promise<ProductDTO[]> {
        const products = this.productRepository.getByCategory(category);
        return (await products).map(x => ProductMapper.mapperEntityToDTO(x))
    }
}

export { GetProductByCategoryService };
