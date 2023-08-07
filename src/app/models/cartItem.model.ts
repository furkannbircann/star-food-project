import { ProductModel } from "./product.model";

export class CartItemModel {
    /**
     *
     */
    constructor(product: ProductModel) {
        this.product = product;
    }
    product!: ProductModel;
    quantity: number = 1;

    get price():number {
        return this.product.price * this.quantity;
    }
}