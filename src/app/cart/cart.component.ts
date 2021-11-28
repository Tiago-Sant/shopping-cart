import { ProductsProps } from './../models/interface';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsCart: ProductsProps = [];
  finalPrice: number = 0;

  constructor() {}

  ngOnInit(): void {
    const productsStorage = localStorage.getItem('productsCart');

    if (productsStorage) {
      this.productsCart = JSON.parse(productsStorage);

      this.finalPrice = this.productsCart.reduce(
        (total, price) => total + price.totalPrice,
        0
      );
    }
  }

  remove(removedProduct: any) {
    this.productsCart = this.productsCart.filter(
      (productCart) => productCart !== removedProduct
    );

    localStorage.setItem('productsCart', JSON.stringify(this.productsCart));

    this.finalPrice = this.productsCart.reduce(
      (total, price) => total + price.totalPrice,
      0
    );
  }
}
