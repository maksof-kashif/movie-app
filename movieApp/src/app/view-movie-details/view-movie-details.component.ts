import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-view-movie-details',
  templateUrl: './view-movie-details.component.html',
  styleUrls: ['./view-movie-details.component.css']
})
export class ViewMovieDetailsComponent implements OnInit {
  movieDetails: any = [];
  movieComments: any = [];
  constructor(public apiService: ApiService, public rote: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(){
    let id = this.rote.snapshot.params['id'];
    this.apiService.getMovieDetails({movieId:id}).subscribe((res: any)=>{
      this.movieDetails = res.data;
      this.movieComments = res.commentsData;
    })
  }

}
