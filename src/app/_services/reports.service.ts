import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }


  public searchReport(data){
    var currentToken = localStorage.getItem('currentToken');
  	const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': currentToken
        })
    };
    return this.http.post<any>(`${environment.apiUrl}/report/search`,data,httpOptions)
    .pipe(map(res=>{
    	return res;
    }))
  }
  public getUsers(data){
    var currentToken = localStorage.getItem('currentToken');
  	const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': currentToken
        })
    };
    return this.http.post<any>(`${environment.apiUrl}/report/get-user`,data,httpOptions)
    .pipe(map(res=>{
    	return res;
    }))
  }
  showLog(id){
    return this.http.get(`${environment.apiUrl}/log/${id}`).pipe(map(
        res=>{
          return res;
        })
      )
  }
}
