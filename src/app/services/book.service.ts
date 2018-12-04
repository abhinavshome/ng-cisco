import { Http, Response } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = 'http://localhost:3000/books';

  constructor(private http: Http) {
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

  getBooks(): Observable<Response> {
    return this.http.get(this.url);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + '/' + book.id, book);
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
    return this.http.put(this.url + '/' + book.id, book);
  }

  toggleSold(book: Book) {
    book.sold = !book.sold;
    return this.http.put(this.url + '/' + book.id, book);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

}
