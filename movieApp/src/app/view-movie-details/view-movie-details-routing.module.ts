import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMovieDetailsComponent } from './view-movie-details.component';

const routes: Routes = [{ path: '', component: ViewMovieDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMovieDetailsRoutingModule { }
