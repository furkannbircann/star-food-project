import { CartItemModel } from "./cartItem.model";

export class OrderModel {
  id!: number;
  orderDate!: Date;
  customerName!: string;
  contact!:string;
  transType!: string;
  amount: number = 0;
  orderedItems!: CartItemModel[];
  message?: string = '';
}
