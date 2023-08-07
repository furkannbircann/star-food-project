import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getProducts(): Observable<ProductModel[]> {
    return this.base.getReq('/products');
  }
}
