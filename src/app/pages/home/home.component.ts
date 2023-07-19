import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:MovieApiServiceService) {}

  bannerResult:any = [];
  trendingMovies:any = [];

  ngOnInit(): void{
    this.bannerData();
    this.trendingData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res)=>{
      this.bannerResult = res.results;
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res)=>{
      console.log(res, "trending")
      this.trendingMovies = res.results;
    })
  }

}
