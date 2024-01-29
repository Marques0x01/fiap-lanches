import { IProduct } from "../../../domain/models/IProductModel";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { ProductDTO } from "../../../adapters/dtos/product/ProductDTO";

interface IGetProductByCategoryService {
  execute(category: EProductCategory): Promise<ProductDTO[]>;
}

export { IGetProductByCategoryService };
