import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // phrase: string = '';

<<<<<<< HEAD
  booksList: Book[] = this.booksService.list;
=======

  // booksList: Book[] = this.booksService.list;

  featuredBooks: Book[] = this.booksService.getFeatured(true).slice(0, 5);

  activeBooks: Book[] = this.booksService.getActive(true).slice(0, 5);

>>>>>>> origin/dev

  featuredBooks: Book[] = this.booksService.getFeatured(true).slice(0, 5);

  constructor(
    private booksService: BooksService,
  ) { };

  // onChangePhrase(event: Event): void {
  //   this.phrase = (event.target as HTMLInputElement).value;
  // }

  ngOnInit(): void {
  }



}
