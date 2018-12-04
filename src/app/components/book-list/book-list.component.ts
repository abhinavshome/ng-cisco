import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
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

  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {
    
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.books = this.bookService.getBooks();
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book);
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book);
  }

  toggleSold(book: Book) {
    this.bookService.toggleSold(book);
  }

  addBook(book: Book) {
    this.bookService.addBook(book);
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
