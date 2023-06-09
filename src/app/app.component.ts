import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public productsInfo: any;
  public constructor(private http: HttpClient) {}
  public ngOnInit(): void {
    const url: string = './assets/products.json';
    this.http.get(url).subscribe((response) => {
      this.productsInfo = response;
    });
  }

  getProductsInfo() {
    return this.productsInfo;
  }

  tableData: any[] = [];

  cardClicked(productData: Product) {
    const findProduct = this.tableData.find((data) => data === productData);
    if (!findProduct) {
      this.tableData.push(productData);
    } else {
      productData.quantity++;
    }
  }
}
