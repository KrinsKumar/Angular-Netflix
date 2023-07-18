import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Netflix';
  navbg: any;
  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log(document.body.scrollTop, 'scrollLength')
      this.navbg = {
        'background-color': '#000000'
      }      
    } else {
      this.navbg = {} 
    }
  }
}
