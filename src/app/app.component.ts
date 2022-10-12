import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopService } from './shop/shop.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'e-client';
  products: any;
  constructor(private http: HttpClient, shopService: ShopService) {}

  ngOnInit(): void {}
}
