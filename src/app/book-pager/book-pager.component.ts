import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-pager',
  templateUrl: './book-pager.component.html',
  styleUrls: ['./book-pager.component.scss']
})
export class BookPagerComponent implements OnInit {

  @Input() books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
