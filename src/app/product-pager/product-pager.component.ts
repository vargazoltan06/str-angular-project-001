import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {


  @Input() books: Book[] = [];
  @Input() propValue: string = '2';

  constructor() { }

  ngOnInit(): void {
  }

}