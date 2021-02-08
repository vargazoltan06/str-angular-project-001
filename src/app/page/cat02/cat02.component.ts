import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  propValue: string = '2';
  phrase: string = '';

  //booksList: Book[] = this.booksService.list;
  booksList$: Observable<Book[]> = this.booksService.getAll();

  //cat2Books: Book[] = this.booksService.getCategory(2, true).slice(0, 5);


  constructor(
    private booksService: BooksService,
  ) { };

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
