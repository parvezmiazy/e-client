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
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getProduct().subscribe((res) => {
      this.products = res;
    });
  }
}
