import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    console.log("get service")
    return this.http.get("localhost:8000")
  }

  postData(data:any):Observable<any>{
    console.log("post service")
    return this.http.post("localhost:8000",data)

  }
}
