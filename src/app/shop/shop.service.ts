import { IPagination } from './../shared/models/pagination';
import { IBrand } from './../shared/models/brand';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  base_url = 'http://localhost:3000/';

  getProduct(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();
    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }
    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }
    if (sort) {
      params = params.append('sort', sort);
    }
    return this.http
      .get<IProduct[]>(this.base_url + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }
  getBrand() {
    return this.http.get<IBrand[]>(this.base_url + 'brands');
  }
  getProductType() {
    return this.http.get<IProductType[]>(this.base_url + 'types');
  }
}
