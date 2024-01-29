import { CreateProductDTO } from "../../../adapters/dtos/product/CreateProductDTO";

interface ICreateOrUpdateProductService {
  execute(product: CreateProductDTO): Promise<string>;
}

export { ICreateOrUpdateProductService };
