import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  
getTasks(){
return this._http.get('/tasks');
}
createTask(task){
  console.log("Create")
  return this._http.post('/tasks', task);
}

getOneTask(task_id){
  return this._http.get('/tasks/' +task_id)
}

update(task){
  console.log("update task");
  return this._http.put('/tasks/' + task._id,task)
}

delete(task_id){
  return this._http.delete('/tasks/' + task_id)
}

}
