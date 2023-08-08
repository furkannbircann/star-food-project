import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartModel } from 'src/app/models/cart.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css'],
})
export class CreateOrderPageComponent implements OnInit {

  /*Data*/
  ordersData: OrderModel[] = [];
  productsData: ProductModel[] = [];

  selectedFormItems!: ProductModel[];
  /* */

  cart!: CartModel;
  deleteItem!: number;
  totalPrice: number = 0;
  orderedItems!: CartModel[];
  createOrderForm!: FormGroup;

  clickCounter: number = 1;
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.createOrderForm = this.formBuilder.group({
      customerName: '',
      contact: '',
      transType: '',
      message: '',
      foods: this.formBuilder.group({
        food: '',

      })
    })
    this.productService.getProducts().subscribe((res) => {
      this.productsData = res;
    });
    this.orderService.getOrders().subscribe((res) => {
      this.ordersData = res;
    });

  }

  saveOrder() {
    if (this.createOrderForm.valid) {
      console.log(this.createOrderForm.value)
    }
  }

  removeFromSelectedItems(productId: number) {
    let removeItemIndex = this.selectedFormItems.findIndex(p => p.id === productId)
    if (removeItemIndex)
      // let removeItem = this.selectedItems.filter(p=> p.id === productId)
      if (removeItemIndex > -1) {
        this.selectedFormItems.splice(removeItemIndex - 1, removeItemIndex)
      }
  }
}
