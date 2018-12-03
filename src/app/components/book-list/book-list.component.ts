import { Cart, Item } from './../../models/cart';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  cart: Cart;

  constructor() {
  }

  ngOnInit() {
    this.cart = new Cart([], 0);
    this.books = [
      new Book(
        'The Alchemist',
        'Paulo Cohelo',
        23,
        4
      ),
      new Book(
        '4 hour work week',
        'Tim Ferris',
        98,
        5
      ),
      new Book(
        'Power of Now',
        'Eckhart Tolle',
        20,
        3
      ),
      new Book(
        '5 point someone',
        'Chetan Bhagat',
        11,
        2
      )
    ]
      ;
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }

  toggleSold(book: Book) {
    book.sold = !book.sold;
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  addToCart(book: Book) {
    let item = this.cart.items.find(function(i) {
      return i.name == book.title; 
    });

    if(item) {
      item.qty++;
    } else {
      item = new Item(book.title,1, book.price);
      this.cart.items.push(item);
    }
    
    this.cart.totalPrice += book.price;
  }

}
