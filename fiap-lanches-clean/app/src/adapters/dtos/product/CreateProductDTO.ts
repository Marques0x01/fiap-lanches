import { EProductCategory } from "../../../domain/enums/EProductCategory";

export class CreateProductDTO {
    private _name: string;
    private _value: number;
    private _amount: number;
    private _category: EProductCategory;

    constructor(name: string, value: number, amount: number, category: EProductCategory) {
        this._name = name;
        this._value = value;
        this._amount = amount;
        this._category = category;
    }

    // Getters e setters
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get category(): EProductCategory {
        return this._category;
    }

    set category(category: EProductCategory) {
        this._category = category;
    }
}