import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOption } from '../Models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
  
  getAllMenu():Observable<MenuOption[]>{

    return this.http.get<MenuOption[]>("http://localhost:4500/api/v1/menu/all")

  }
}
