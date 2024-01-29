import { ProductDTO } from "../../../adapters/dtos/product/ProductDTO";
import { IProduct } from "../../../domain/models/IProductModel";

interface IGetProductByIdService {
  execute(id: string): Promise<ProductDTO>;
}

export { IGetProductByIdService };
