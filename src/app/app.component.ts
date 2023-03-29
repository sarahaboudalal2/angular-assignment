import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
      console.log(this.productsInfo);
    });
  }

  getProductsInfp() {
    return this.productsInfo;
    console.log(this.productsInfo);
  }
}
