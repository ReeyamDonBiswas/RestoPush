import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { threadId } from 'worker_threads';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/resturants"
  constructor(private http:HttpClient) { }
  getList(){
    console.log("some data")
    return this.http.get(this.url);
  }
  saveResto(data){
    //console.log("service",data);
    
    return this.http.post(this.url,data)
  }
  deleteResto(id){
    return this.http.delete(`${this.url}/${id}`)
    
  }
  getCurrentresto(id){
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }

}
