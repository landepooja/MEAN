import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getCakes(){
    console.log("I'm in the service")
    return this._http.get('/cakes');
    }

  createCake(cake){
      console.log("Create")
      return this._http.post('/cakes', cake);
    }

  makeRating(rating, id){
    console.log("makeRating")
    return this._http.post("/rate", rating);
  }
}
