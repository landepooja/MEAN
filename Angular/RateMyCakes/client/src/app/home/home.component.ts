import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCakes:any;
  cake:any;
  selectedCake: any;
  newRating:any;

  constructor(private _httpService:HttpService) {
    this.resetCakes();
    this.getCakes();
   }

  ngOnInit() {
     this.getCakes();
     this.resetCakes();
  }

  resetCakes() {
    this.cake = { name: "" , imageUrl:""}// initialize
  }
reserRating(){
  this.newRating={
    stars:1,
    comment: ""
  }
}

getCakes(){
  let obs = this._httpService.getCakes()
  obs.subscribe(data => {
    console.log("here are the ckaes!" , data)
    this.allCakes = data
  })
}

onSubmitCreate(){
  let obs = this._httpService.createCake(this.cake)
  obs.subscribe(data => {
    console.log("cake: ", data)
    this.resetCakes();
    this.allCakes = data // refresh the page and load the image
    this.getCakes();
  })
}

selectCakes(cake){
  console.log(":-", cake);
  
  this.selectedCake = cake;
}


dataFromChild(eventData){
  //console.log("dataFromChild ", eventData)
  this.getCakes();
}
}
