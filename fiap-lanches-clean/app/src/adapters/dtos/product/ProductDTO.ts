import { EProductCategory } from "../../../domain/enums/EProductCategory";

export class ProductDTO {
    id?: string;
    name: string;
    value: number;
    promotionValue?: number;
    amount: number;
    createdAt?: Date;
    updatedAt?: Date;
    category: EProductCategory;
    jamal: string;

    constructor(
        name: string,
        value: number,
        amount: number,
        category: EProductCategory,
        id?: string,
        promotionValue?: number,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.promotionValue = promotionValue;
        this.amount = amount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.category = category;
    }
}
