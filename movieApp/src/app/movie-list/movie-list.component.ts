import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: any = [];
  
  constructor( public apiService: ApiService) { }
  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(){
    this.apiService.getMovieList().subscribe((res: any)=>{
      this.movieList = res.data;
    })
  }

}
