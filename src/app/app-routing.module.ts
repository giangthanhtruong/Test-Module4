import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterComponent} from "./master/master.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path : '',
    component: MasterComponent,
    children: [
      {
        path: 'book',
        loadChildren: () => import('./components/books/books.module').then(m => m.BooksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
