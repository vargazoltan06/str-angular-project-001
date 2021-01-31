import { Component } from '@angular/core';
import { Book } from './model/book';
import { BooksService } from './service/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';

  booksLista: Book[] = this.booksService.list;

  constructor(
    private booksService: BooksService,
  ) { };





}
