import { CreateProductDTO } from "../dtos/product/CreateProductDTO"
import { IProduct } from "../../domain/models/IProductModel"
import { ProductDTO } from "../dtos/product/ProductDTO"

export class ProductMapper {
    public static mapperCreateProductDTOToEntity(createProductDTO: CreateProductDTO): IProduct {
        return {
            name: createProductDTO.name,
            value: createProductDTO.value,
            amount: createProductDTO.amount,
            category: createProductDTO.category
        }
    }

    public static mapperEntityToDTO(product: IProduct) {
        return new ProductDTO(
            product.name,
            product.value,
            product.amount,
            product.category,
            product.id,
            product.promotionValue,
            product.createdAt,
            product.updatedAt
        )
    }
}