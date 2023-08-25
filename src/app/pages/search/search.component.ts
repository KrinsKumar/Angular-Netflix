import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {MovieApiServiceService} from 'src/app/service/movie-api-service.service'
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieApiServiceService, private title: Title, private meta:Meta) {
    this.title.setTitle("Search Movies");
    this.meta.updateTag({name:'description',content:'Search for the movies you want to watch'});
  }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResult = result.results;
    })
  }

}
