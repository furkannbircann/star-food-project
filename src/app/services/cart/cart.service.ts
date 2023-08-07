import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartItemModel } from 'src/app/models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService {
  private cart: CartModel = new CartModel();

  addToCart(product: ProductModel): void {
    let cartItem = this.cart.items.find(item => item.product.id = product.id);
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItemModel(product));
  }
  removeFromCart(productId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.product.id != productId);
  }
  changeQuantity(productId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.product.id === productId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): CartModel {
    return this.cart;
  }
}
