import {
  Component,
  EventEmitter,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProductProps, ProductsProps } from '../models/interface';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @NgModule({
    imports: [CommonModule],
  })
  amount: number = 0;

  @Output()
  addProduct = new EventEmitter();

  products: ProductsProps = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg',
      name: 'Vegeta',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 1200,
      totalPrice: 0,
    },
    {
      img: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1.jpg',
      name: 'Goku',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 1500,
      totalPrice: 0,
    },
    {
      img: 'https://i.pinimg.com/originals/6e/25/0f/6e250ff3fd6cddceefd5c9461ac97e49.jpg',
      name: 'Gohan',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 800,
      totalPrice: 0,
    },
    {
      img: 'https://tm.ibxk.com.br/2020/09/16/16180310869653.jpg',
      name: 'Saitama',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 10000,
      totalPrice: 0,
    },
    {
      img: 'https://cdna.artstation.com/p/assets/images/images/028/868/714/large/elson-soares-ikki-de-fenix.jpg?1595774736',
      name: 'Ikki de Fênix',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 1200,
      totalPrice: 0,
    },
    {
      img: 'http://pm1.narvii.com/6353/6a344996fccfaa5fca456c75df0895574ca7f88d_00.jpg',
      name: 'Yusuke Urameshi',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 1500,
      totalPrice: 0,
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/Hiei.png',
      name: 'Hiei',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 1200,
      totalPrice: 0,
    },
    {
      img: 'http://pm1.narvii.com/6422/bd7a7cee99b021980ea658bfa3f81960af2adce8_00.jpg',
      name: 'Shaka',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
      amount: 0,
      price: 10000,
      totalPrice: 0,
    },
  ];

  productsCart: ProductsProps = [];

  formValidator: FormGroup;

  constructor() {
    this.formValidator = new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        this.checkIfLessThanOne(),
      ]),
    });
  }

  ngOnInit(): void {}

  checkIfLessThanOne(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      const invalid = value <= 0;

      return invalid ? { invalidValue: { value } } : null;
    };
  }

  addToCart(product: ProductProps, event: Event): void {
    event.preventDefault();

    const amountProduct = this.formValidator.get('amount')?.value;

    const productsStorage = localStorage.getItem('productsCart');
    console.log(event);

    if (productsStorage) {
      this.productsCart = JSON.parse(productsStorage);

      const newProuctCart: ProductProps = {
        name: product.name,
        description: product.description,
        amount: amountProduct,
        img: product.img,
        price: product.price,
        totalPrice: product.price * amountProduct,
      };

      console.log(newProuctCart);

      this.productsCart.push(newProuctCart);

      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    } else {
      const newProuctCart: ProductProps = {
        name: product.name,
        description: product.description,
        amount: amountProduct,
        img: product.img,
        price: product.price,
        totalPrice: product.price * amountProduct,
      };

      console.log(newProuctCart);

      this.productsCart.push(newProuctCart);

      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    }
  }
}
