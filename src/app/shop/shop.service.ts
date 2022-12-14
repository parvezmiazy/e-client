import { ShopParams } from './../shared/models/shopParams';
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

  getProduct(ShopParams: ShopParams) {
    let params = new HttpParams();
    if (ShopParams.brandId !== 0) {
      params = params.append('brandId', ShopParams.brandId);
    }
    if (ShopParams.typeId !== 0) {
      params = params.append('typeId', ShopParams.typeId);
    }

    if (ShopParams.search) {
      params = params.append('search', ShopParams.search);
    }

    params = params.append('sort', ShopParams.sort);
    params = params.append('pageIndex', ShopParams.pageNumber);
    params = params.append('pageIndex', ShopParams.pageSize);

    return this.http
      .get<IPagination | null>(this.base_url + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  getProductDetails(id: number) {
    return this.http.get<IProduct>(this.base_url + 'products/' + id);
  }
  getBrand() {
    return this.http.get<IBrand[]>(this.base_url + 'brands');
  }
  getProductType() {
    return this.http.get<IProductType[]>(this.base_url + 'types');
  }
}
