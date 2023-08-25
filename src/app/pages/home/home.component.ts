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
  actionMovies: any = [];
  adventureMovies: any = [];
  animatedMovies: any = [];
  comedyMovies: any = [];
  documentaryMovies: any = [];
  scienceFictionMovies: any = [];
  thrillerMovies: any = [];

  ngOnInit(): void{
    this.bannerData();
    this.trendingData();
    this.actionData();
    this.adventureData();
    this.animatedData();
    this.comedyData();
    this.documentaryData();
    this.scienceFictionData();
    this.thrillerData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res)=>{
      this.bannerResult = res.results;
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res)=>{
      this.trendingMovies = res.results;
    })
  }

  actionData() {
    this.service.actionMovieApiData().subscribe((res)=>{
      this.actionMovies = res.results;
    })
  }

  adventureData() {
    this.service.adventureMovieApiData().subscribe((res)=>{
      this.adventureMovies = res.results;
    })
  }

  animatedData() {
    this.service.animatedMovieApiData().subscribe((res)=>{
      this.animatedMovies = res.results;
    })
  }

  comedyData() {
    this.service.comedyMovieApiData().subscribe((res)=>{
      this.comedyMovies = res.results;
    })
  }

  documentaryData() {
    this.service.documentaryMovieApiData().subscribe((res)=>{
      this.documentaryMovies = res.results;
    })
  }

  scienceFictionData() {
    this.service.scienceFictionMovieApiData().subscribe((res)=>{
      this.scienceFictionMovies = res.results;
    })
  }

  thrillerData() {
    this.service.thrillerMovieApiData().subscribe((res)=>{
      this.thrillerMovies = res.results;
    })
  }
}
