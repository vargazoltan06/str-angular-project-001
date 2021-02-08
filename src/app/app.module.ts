import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { BookPagerComponent } from './book-pager/book-pager.component';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './data-editor/data-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    BookDetailComponent,
    BookListComponent,
    FilterPipe,
    CategoryPipe,
    BookPagerComponent,
    AdminComponent,
    DataEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
