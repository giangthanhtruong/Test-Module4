import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MasterComponent } from './master/master.component';
import { SitebarComponent } from './layout/sitebar/sitebar.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookDeleteComponent } from './components/books/book-delete/book-delete.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterComponent,
    SitebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
