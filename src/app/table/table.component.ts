import { Component, Input } from '@angular/core';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableProducts = [
    {
      id: 0,
      product: '',
      price: 0,
      quantity: 0,
    },
  ];

  getPriceTimesQuantity(product: Product) {
    const multiply: number = parseInt(
      (product.price * product.quantity).toFixed(2)
    );
    return multiply;
  }

  getTotalPrice() {
    let totalPrice: number = 0;
    for (const item of this.tableProducts) {
      totalPrice += this.getPriceTimesQuantity(item);
    }
    return totalPrice;
  }

  removeItem(item: Product) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      const index = this.tableProducts.indexOf(item);
      this.tableProducts.splice(index, 1);
    }
  }
}
