import { Component, OnInit, OnChanges } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor() {
  }

  ngOnInit() {
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

  rateDown(index: number) {
    let book = this.books[index];
    if (book.rating > 1)
      book.rating--;
  }

}
