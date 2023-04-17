import { Brand } from "./brand.model";
import { Category } from "./category.model";

export interface Product {
    _id: number;
    title: string;
    brand: Brand;
    category: Category;
    // brand: string;
    // category: string;
    color: string;
    price: string;
    createdAt?: Date;
    updatedAt?: Date;
}
