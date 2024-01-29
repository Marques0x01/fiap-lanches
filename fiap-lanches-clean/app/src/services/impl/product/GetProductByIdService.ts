import { inject, injectable } from "tsyringe";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByIdService } from "../../interfaces/product/IGetProductByIdService";
import { ProductMapper } from "../../../adapters/mappers/ProductMapper";
import { ProductDTO } from "../../../adapters/dtos/product/ProductDTO";

@injectable()
class GetProductByIdService implements IGetProductByIdService {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    async execute(id: string): Promise<ProductDTO> {
        const product = await this.productRepository.getById(id);
        return ProductMapper.mapperEntityToDTO(product);
    }
}

export { GetProductByIdService };
