import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: LatestNewsComponent}
    ])
  ]
})
export class NewsModule { }
