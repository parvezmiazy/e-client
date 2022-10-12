import { IProduct } from '../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  base_url = 'http://localhost:3000/';

  getProduct() {
    return this.http.get<IProduct>(this.base_url + 'products');
  }
}
