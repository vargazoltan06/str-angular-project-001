import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {


  propValue: string = '1';
  phrase: string = '';

  booksList: Book[] = this.booksService.list;


  featuredCartoon: Book[] = this.booksService.getFeaturedCartoon(true).slice(0, 5);


  constructor(
    private booksService: BooksService,
  ) { };

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }


}
