import { Component, EventEmitter, Output } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isSidenavOpen: boolean = true;
  @Output() isSidenavOpenEvent = new EventEmitter<boolean>();
  ordersData: OrderModel[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res) => {
      this.ordersData = res;
      console.log(res)
    });
  }
  removeOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe((res) => {
      this.ordersData = this.ordersData.filter((item) => item.id !== id);
      return this.ordersData;
    });
  }

}
