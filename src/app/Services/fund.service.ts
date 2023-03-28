import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http:HttpClient) { }
  getAllFunds():Observable<any>{

    return this.http.get<any>("http://localhost:4500/api/v1/fund/all")

  }
}
