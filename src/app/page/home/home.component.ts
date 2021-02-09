import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booksList$: Observable<Book[]> = this.booksService.getAll();

  constructor(
    private booksService: BooksService,
  ) { };


  ngOnInit(): void {
  }

}
