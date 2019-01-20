import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DServiceService {

  constructor(private http:HttpClient) { }

  getAuth(r):Observable<any>
  {
    console.log(r)
    return this.http.post('/login',r);
    
  }


  getCompData():Observable<any>{
    return this.http.get<any>('getcomp')
  }

}
