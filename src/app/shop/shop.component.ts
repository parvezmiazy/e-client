import { IPagination } from './../shared/models/pagination';
import { IBrand } from './../shared/models/brand';
import { IProductType } from './../shared/models/productType';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any;
  brands: IBrand[];
  types: IProductType[];
  brandIdSelected: number;
  typeIdSelected: number;
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService
      .getProduct(this.brandIdSelected, this.typeIdSelected)
      .subscribe(
        (response) => {
          this.products = response;
          console.log(this.products);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getBrands() {
    this.shopService.getBrand().subscribe(
      (res) => {
        this.brands = [{ id: 0, name: 'All' }, ...res];
        console.log(this.brands);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTypes() {
    this.shopService.getProductType().subscribe(
      (res) => {
        this.types = [{ id: 0, name: 'All' }, ...res];
        console.log(this.types);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }
}
