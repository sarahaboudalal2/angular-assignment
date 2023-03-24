import { Product } from '../products/products.component';

export class CardClickService {
  OnCardClick(product: Product) {
    console.log(product.product);
  }
}
