import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(userForm:FormGroup):Observable<any>{
    
    //const data={username,password,role}
   

  
    let data=
    {username:userForm.controls['username'].value,
    password:userForm.controls['password'].value,
  }
   

    return this.http.post<any>("http://localhost:4500/api/users/login",data)

  }


}
