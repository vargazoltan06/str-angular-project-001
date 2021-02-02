import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


  @Input() phraseString: string = '';
  @Input() propValue: string = '';

  @Input() books: Book[] = [];
  currentBook: Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

}
