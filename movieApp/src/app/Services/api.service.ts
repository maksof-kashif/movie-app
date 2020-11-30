import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUrl = environment.baseUrl;
  
  constructor( public http: HttpClient) { }

  getMovieList(){
    return this.http.get(this.baseUrl+'/api/movie/getMovieList');
  }
  
  getMovieDetails(data:any){
    return this.http.post(this.baseUrl+'/api/movie/getMovieDetails', data);
  }
}
