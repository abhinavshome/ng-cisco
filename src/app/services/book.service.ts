import { environment } from './../../environments/environment';
import { Http, Response } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = environment.apiUrl;

  constructor(private http: Http) {

  }

  getBooks(): Observable<Response> {
    return this.http.get(this.url);
  }

  getBook(id): Observable<Response> {
    return this.http.get(this.url + '/' + id);
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
