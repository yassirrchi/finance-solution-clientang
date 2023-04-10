import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http:HttpClient) { }
  getAllFunds():Observable<any>{

    return this.http.get<any>("http://localhost:4500/api/v1/fund/all")

  }
  createFund(walletForm:FormGroup):Observable<any>{
    //const data={username,password,role}
   

  
    let data=
    {code:walletForm.controls['code'].value,
    name:walletForm.controls['name'].value,
    active:walletForm.controls['active'].value,
    external_code:walletForm.controls['external_code'].value,
    status:walletForm.controls['status'].value};

    return this.http.post<any>("http://localhost:4500/api/v1/fund/create",data)

  }

}
