// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardClickService } from '../services/cardClick.service';

export type Product = {
  id: number;
  product: string;
  price: number;
  quantity: number;
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [CardClickService],
})
export class ProductsComponent {
  @Input() products = [
    {
      id: 0,
      product: '',
      price: 0,
      quantity: 0,
    },
  ];
  @Output() cardClick = new EventEmitter<Product>();

  onCardClick(product: Product) {
    this.cardClick.emit(product);
  }
  // public constructor(
  //   private cardClick: CardClickService
  // ) {}
  // public ngOnInit(): void {
  //   const url: string = './assets/products.json';
  //   this.http.get(url).subscribe((response) => {
  //     this.productsInfo = response;
  //   });
  // }
  // onClick(product: Product): void {
  //   console.log(product.product);
  // }

  // onClick(product: Product) {
  //   // const cardClick = new CardClickService();
  //   this.cardClick.OnCardClick(product);
  // }
}
