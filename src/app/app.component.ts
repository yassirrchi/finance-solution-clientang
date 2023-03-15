import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  showHeader=true;


  
  title = 'finance-erp';
  
   constructor(private router:Router){
    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=="/login")
          this.showHeader=false
          else
          this.showHeader=true;

        }
      }
    )
   }

 

}
