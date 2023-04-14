export interface Customer {
    firstName: string,
    lastNme?: string,
    email: string,
    mobile?: number,
    password?: string,
    role:string,
    isBlocked: boolean,
    // cart?: Array<any>
    // address?: any,
    // wishlist?: any,
    createdAt?: Date,
    updatedAt?: Date,
}
