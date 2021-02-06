import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BooksService } from '../service/books.service';
import { ConfigService, ITableCol } from '../service/config.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {


  list: Observable<Book[]> = this.bookService.getAll();
  tableCols: ITableCol[] = this.configService.tableCol;


  constructor(
    private bookService: BooksService,
    private configService: ConfigService,
  ) { }

  onUpdate(book: Book): void {
    this.bookService.update(book).subscribe();
  }

  onDelete(book: Book): void {
    this.bookService.remove(book).subscribe();
  }

  ngOnInit(): void {
  }

}
