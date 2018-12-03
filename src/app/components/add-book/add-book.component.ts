import { Book } from './../../models/book';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() addBookFormSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSaveBtnClick(
    title: HTMLInputElement,
    author: HTMLInputElement,
    price: HTMLInputElement,
    rating: HTMLInputElement,
  ) {
    let newBook = new Book(
        title.value,
        author.value,
        +price.value,
        +rating.value
    );
    this.addBookFormSubmit.emit(newBook);
  }

}
