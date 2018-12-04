import { Book } from './../../models/book';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() addBookFormSubmit = new EventEmitter();
  newBook: Book;

  constructor() { }

  ngOnInit() {
    this.newBook = new Book(null, null, null, null);
  }

  handleFormSubmit() {
    this.newBook.rating = +this.newBook.rating;
    this.newBook.price = +this.newBook.price;
    this.addBookFormSubmit.emit(this.newBook);
    this.newBook = new Book('Rh', null, null, null);
  }

  // handleSaveBtnClick(
  //   title: HTMLInputElement,
  //   author: HTMLInputElement,
  //   price: HTMLInputElement,
  //   rating: HTMLInputElement,
  // ) {
  //   let newBook = new Book(
  //       title.value,
  //       author.value,
  //       +price.value,
  //       +rating.value
  //   );
  //   this.addBookFormSubmit.emit(newBook);
  // }

}
