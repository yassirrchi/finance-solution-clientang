import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http:HttpClient) { }

  createOperation(operationForm:FormGroup):Observable<any>{
    //const data={username,password,role}
    

  
    let data=
    {fundid:operationForm.controls['fundid'].value,
    op_type:operationForm.controls['typeop'].value,
    status:operationForm.controls['statut'].value,
     
    walletid:operationForm.controls['walletid'].value,
    quantity:operationForm.controls['quantite'].value,
    price:operationForm.controls['price'].value,
     
     
    createdby:operationForm.controls['createdby'].value,
    op_date:operationForm.controls['date_op'].value,
    val_date:operationForm.controls['date_val'].value
     
  
  }
    

    return this.http.post<any>("http://localhost:4500/api/v1/operationnote/create",data)

  }

  getAllOperations():Observable<any>{

    return this.http.get<any>("http://localhost:4500/api/v1/operationnote/all")

  }
  getOperation(id:number):Observable<any>{

    return this.http.get<any>("http://localhost:4500/api/v1/operationnote/"+id)

  }
}
