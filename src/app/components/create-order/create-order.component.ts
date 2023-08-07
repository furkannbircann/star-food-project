import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  ordersData: OrderModel[] = [];
  lastOrder: OrderModel = new OrderModel();
  productsData: ProductModel[] = [];

  toppings = new FormControl('');

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.productsData = res;
    });
    this.orderService.getOrders().subscribe((res) => {
      this.ordersData = res;
    });
  }
}
