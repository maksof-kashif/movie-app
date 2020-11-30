import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMovieDetailsRoutingModule } from './view-movie-details-routing.module';
import { ViewMovieDetailsComponent } from './view-movie-details.component';


@NgModule({
  declarations: [ViewMovieDetailsComponent],
  imports: [
    CommonModule,
    ViewMovieDetailsRoutingModule
  ]
})
export class ViewMovieDetailsModule { }
