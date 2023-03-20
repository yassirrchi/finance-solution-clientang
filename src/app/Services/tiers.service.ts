import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiersService {

  constructor(private http:HttpClient) { }
  createEntiteTiers(tiersForm:FormGroup):Observable<any>{
    //const data={username,password,role}
   

  
    let data=
    {code:tiersForm.controls['code'].value,
    name:tiersForm.controls['name'].value,
    active:tiersForm.controls['active'].value,
    external_code:tiersForm.controls['external_code'].value,
    status:tiersForm.controls['status'].value,
    bank:tiersForm.controls['banque'].value,
    custodian:tiersForm.controls['depositaire'].value,
    counterparty:tiersForm.controls['contrepartie'].value,
  
  }
    

    return this.http.post<any>("http://localhost:4500/api/v1/thirdpartyentity/create",data)

  }
  getEntiteTiers():Observable<any>{

    return this.http.get<any>("http://localhost:4500/api/v1/thirdpartyentity/all")

  }
}
