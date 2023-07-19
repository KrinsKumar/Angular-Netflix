import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl=  "https://api.themoviedb.org/3";
  apiKey = "3745897674b8050d02b0345ca1817c93";

  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}&language=en-US`)
  }

  //trending movies
  trendingMovieApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}&language=en-US`)
  }

}
