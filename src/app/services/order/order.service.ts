import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { OrderModel } from 'src/app/models/order.model';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/models/cartItem.model';
import { ProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  private cartItems: CartItemModel[] = [];
  private order:OrderModel = new OrderModel();
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getOrders(): Observable<OrderModel[]> {
    return this.base.getReq('/orders?_sort=id&_order=desc');
  }
  public addOrder(data: OrderModel): Observable<OrderModel> {
    return this.base.postReq('/orders', data);
  }
  public deleteOrder(id: number): Observable<OrderModel> {
    return this.base.delReq('/orders/' + id,id);
  }
  // addToCart(product: ProductModel):void{
  //   let cartItem = this.order.orderedItems.find(item => item.product.id === product.id);
  //   if(cartItem){
  //     this.changeQuantity(product.id, cartItem.quantity + 1);
  //     return;
  //   }
  //   this.order.orderedItems.push(new CartItemModel(product));
  // }
  getOrder():OrderModel{
    return this.order;
  }
  changeQuantity(productId: number, quantity: number) {

  }
}
