import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./movie-list/movie-list.module').then(m => m.MovieListModule) },
  { path: 'viewMovieDetails/:id',  loadChildren: () => import('./view-movie-details/view-movie-details.module').then(m => m.ViewMovieDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
