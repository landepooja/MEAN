import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CakeComponent } from './cake/cake.component';
import { RatingformComponent } from './ratingform/ratingform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CakeComponent,
    RatingformComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
