import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CartModel } from 'src/app/models/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService {
  private cart: CartModel = new CartModel();

  addOrder(data):Observable<CartModel>{
    
  }
}
