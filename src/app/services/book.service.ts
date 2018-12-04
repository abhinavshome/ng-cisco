import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  
  constructor() {
    console.log('service instance created');
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
    ];
  }

  getBooks() : Book[] {
    return this.books;
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

 }
