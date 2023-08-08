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
  @Output() isSidenavOpenEvent = new EventEmitter<boolean>;
  ordersData: OrderModel[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res) => {
      this.ordersData = res;
    });
  }
  changeSidenavOpen() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.isSidenavOpenEvent.emit(this.isSidenavOpen);
  }
}
