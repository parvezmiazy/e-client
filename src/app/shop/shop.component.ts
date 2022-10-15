import { ShopParams } from './../shared/models/shopParams';
import { IPagination } from './../shared/models/pagination';
import { IBrand } from './../shared/models/brand';
import { IProductType } from './../shared/models/productType';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false })
  searchTerm!: ElementRef;
  products: any;
  shopParams = new ShopParams();
  brands: IBrand[] = [];
  types: IProductType[] = [];
  totalCount: number = 0;
  sortOptions = [
    {
      name: 'Alphabetical',
      value: 'name',
    },
    {
      name: 'Price: Low to High',
      value: 'priceAsc',
    },
    {
      name: 'Price: High to Low',
      value: 'priceDesc',
    },
  ];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProduct(this.shopParams).subscribe(
      (response) => {
        this.products = response;
        this.shopParams.pageNumber = 1;
        this.shopParams.pageSize = 5;
        this.totalCount = 1;
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

  onBrandSelected(brandId: any) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onTypeSelected(typeId: any) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onSortSelected(sort: any) {
    this.shopParams.sort = sort.value;
    this.getProducts();
  }
  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event.page;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams.pageNumber = 1;
    this.shopParams = new ShopParams();
  }
}
