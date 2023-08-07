import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartModel } from 'src/app/models/cart.model';
import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css'],
})
export class CreateOrderPageComponent implements OnInit {
  ordersData: OrderModel[] = [];
  productsData: ProductModel[] = [];
  cart!: CartModel;
  deleteItem!: number;
  selectedItems!: ProductModel[];

  clickCounter: number = 1;
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.productsData = res;
    });
    this.orderService.getOrders().subscribe((res) => {
      this.ordersData = res;
    });
  }


  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItemModel) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItemModel, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity)
    this.setCart();
  }

  removeFromSelectedItems(productId: number) {
    let removeItemIndex = this.selectedItems.findIndex(p => p.id === productId)
    if (removeItemIndex > -1) {
      this.selectedItems.splice(removeItemIndex)
    }
    return this.selectedItems;
  }



  counterIncrease() {
    this.clickCounter++;
  }
  counterReduce() {
    if (this.clickCounter > 0) {
      this.clickCounter--;
    }
    else if (this.clickCounter == 0) {
      this.clickCounter = 0;
    }
    else{
      this.clickCounter--;
    }
  }
}
