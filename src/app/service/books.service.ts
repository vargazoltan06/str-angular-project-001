import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  productUrl: string = 'http://localhost:3000/books';
  list: Observable<Book[]> = this.getAll();

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.productUrl);
  }

  update(book: Book): Observable<Book> {
    return this.http.patch<Book>(`${this.productUrl}/${book.id}`, book)
  }

  remove(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${this.productUrl}/${book.id}`)
  }

  // getFeatured(randomized?: boolean): Book[] {
  //   const featured = this.list.filter(item => item.featured);
  //   return randomized ? this.randomize(featured) : featured;
  // }

  // getActive(randomized?: boolean): Book[] {
  //   const active = this.list.filter(item => item.active);
  //   return randomized ? this.randomize(active) : active;
  // }

  // getCategory(category: number, randomized?: boolean): Book[] {
  //   const cat = this.list.filter(item => item.catId === category);
  //   return randomized ? this.randomize(cat) : cat;
  // }

  // randomize(sourceArray: any[]): any[] {
  //   return sourceArray.sort(() => Math.random() - 0.5);

  // }
}
