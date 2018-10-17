import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
// import { Title } from '@angular/platform-browser';
// import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  task: any;
  allTasks: any;
  oneTask:any;
  constructor(private _httpService: HttpService ) {
    this.resetTasks();
    this.getTasks();
  }

  getTasks(){
    let obs = this._httpService.getTasks()
    obs.subscribe(data => {
      console.log("Data from getTask", data);
      this.allTasks = data

    })
  }

  resetTasks() {
    this.task = { title: "" }// initialize
  }

  onSubmit(){// createTask
      let obs = this._httpService.createTask(this.task);
      obs.subscribe(data => {
      console.log("Data from CReateSubmit", data);
      this.resetTasks();
      this.getTasks();//this refreshesh the page when we creates the new tasks and apear n page automaticlly
    })
  }

  onbtnEdit(task_id){
    let obs= this._httpService.getOneTask(task_id);
    obs.subscribe(data => {
    console.log("One task", data);
    this.oneTask = data;

  })
  }

  onbtnUpdate(){
    let obs= this._httpService.update(this.oneTask);
    obs.subscribe(data => {
    console.log("updated data", data);
    this.getTasks();
    this.oneTask = false;

  })
  }

  onbtnDelete(task_id){
    let obs= this._httpService.delete(task_id);
    obs.subscribe(data => {
    console.log("deleted data", data);
    this.getTasks();
    this.oneTask = false;
  })
}
}
