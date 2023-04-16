import { Product } from "./product.model";
import { Customer } from "./customer.model";
 
interface Products {
        product: Product,
        count?: Number,
        color?: String,
}

export interface Order {
    products: Product[],
    paymentIntent: object,
    orderStatus: string,
    orderBy?: Customer
}
