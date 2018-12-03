import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book : Book;

  constructor() {
   }

  ngOnInit() {
    this.book = new Book(
      'The Alchemist',
      'Paulo Cohelo',
      23,
      4
    );
  }

}
