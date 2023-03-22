import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Product = {
  id: number;
  product: string;
  price: number;
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsInfo: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const url: string = './assets/products.json';
    this.http.get(url).subscribe((response) => {
      this.productsInfo = response;
    });
  }
}
