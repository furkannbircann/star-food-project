import { ProductModel } from "./product.model";

export class OrderModel {
  id!: number;
  orderDate!: Date;
  customerName!: string;
  contact!:string;
  transType!: string;
  amount: number = 0;
  orderedItems!: ProductModel[];
  message?: string = '';
}
