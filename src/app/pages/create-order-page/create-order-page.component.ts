import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductModel } from 'src/app/models/product.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css'],
})
export class CreateOrderPageComponent implements OnInit {
  /*Data*/
  ordersData: OrderModel[] = [];
  productsData: ProductModel[] = [];
  order!: OrderModel;
  selectedFormItems!: ProductModel[];
  /* */

  createOrderForm!: FormGroup;
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.createOrderForm = this.formBuilder.group({
      customerName: [
        '',
        {
          validators: [Validators.required, Validators.minLength(2)],
        },
      ],
      contact: [
        '',
        {
          validators: [Validators.required, Validators.minLength(2)],
        },
      ],
      transType: [
        '',
        {
          validators: Validators.required,
        },
      ],
      amount: '0',
      orderDate: new Date(),
      message: '',
      orderedItems: this.formBuilder.group({
        product: {
          id: '',
          foodName: '',
          price: '',
          quantity: 1,
        },
      }),
    });
    this.productService.getProducts().subscribe((res) => {
      this.productsData = res;
    });
    this.orderService.getOrders().subscribe((res) => {
      this.ordersData = res;
    });
  }

  addOrder() {
    console.log(this.createOrderForm);
    if (this.createOrderForm.valid) {
      this.orderService.addOrder(this.createOrderForm.value).subscribe({
        next: (res) => {
          this.ordersData.push(res);
          this.createOrderForm.reset();
          this.router.navigateByUrl('/orderlist');
          console.log(res);
        },
      });
    }
  }

  removeFromSelectedItems(product: ProductModel) {
    this.selectedFormItems = this.selectedFormItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    this.setOrder();
  }
  changeQuantity(product: ProductModel, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.orderService.changeQuantity(product.id, quantity);
    this.setOrder();
  }
  setOrder() {
    this.order = this.orderService.getOrder();
  }
}
