import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Book Webshop';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Képregények', link: '/cat01' },
    { text: 'Számítástechnika', link: '/cat02' },
    { text: 'Admin', link: '/admin' },
  ];

  tableCol: ITableCol[] = [
    { key: 'id', text: '#', editable: false },
    { key: 'catId', text: 'category', editable: false },
    { key: 'name', text: 'name', editable: true },
    { key: 'description', text: 'description', editable: true },
    { key: 'image', text: 'image', editable: true },
    { key: 'price', text: 'price', editable: true },
    { key: 'stock', text: 'stock', editable: true },
    { key: 'featured', text: 'featured', editable: true },
    { key: 'active', text: 'active', editable: true }
  ]



  constructor() { }
}
