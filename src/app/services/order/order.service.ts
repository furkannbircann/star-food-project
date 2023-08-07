import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { OrderModel } from 'src/app/models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getOrders(): Observable<OrderModel[]> {
    return this.base.getReq('/orders');
  }
}
