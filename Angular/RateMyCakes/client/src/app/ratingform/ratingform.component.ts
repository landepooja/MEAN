import { Component, OnInit, Input } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ratingform',
  templateUrl: './ratingform.component.html',
  styleUrls: ['./ratingform.component.css']
})
export class RatingformComponent implements OnInit {
  newRating: any;
  @Input() currentCake: any;


  constructor( private _httpService: HttpService, private main: AppComponent) { 
this.resetRating();
  }

  ngOnInit() {
    
  }

  resetRating(){
    this.newRating={
      stars:1,
      comment: ""
    }
  }

makeRating(id){
  console.log(id);
  let obs = this._httpService.makeRating(this.newRating, id);
  obs.subscribe(data=> console.log(data));
}

}
