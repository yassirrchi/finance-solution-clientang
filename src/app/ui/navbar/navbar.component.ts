import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  notificationBoxIsOpen!:boolean;
  userBoxIsOpen!:boolean;
  sideNavIsOpen!:boolean;
  menuBoxIsOpen!:boolean;
  openedWindows!:String[]
  allMenuOptions!:any
  username!:any;
  constructor(private location: Location,private router:Router) {

  }


  ngOnInit(): void {
    this.setUser()
    
     

    this.notificationBoxIsOpen=false;
    this.sideNavIsOpen=false;

    this.userBoxIsOpen=false;
    this.menuBoxIsOpen=false;
    this.openedWindows=[];
    this.allMenuOptions=
    [
      {name:"PorteFeuille",route:"/portefeuille",path:"autres>portefeuilles"},
      {name:"Actions",route:"/operation",path:"Transactions à Placements / Financements à Action à Opérations sur titre"},
      {name:"Perimetre",route:"/tiers",path:"autres>config"},
      {name:"Menu/Roles",route:"/tiers",path:"autres>config"}

  ]
  }
  toggleNotificationBox(){
    this.notificationBoxIsOpen?this.userBoxIsOpen=false:this.userBoxIsOpen=false;
    this.notificationBoxIsOpen=!this.notificationBoxIsOpen;
  }
  toggleUserBox(){
    this.userBoxIsOpen?this.notificationBoxIsOpen=false:this.notificationBoxIsOpen=false;
    this.userBoxIsOpen=!this.userBoxIsOpen;
  }
  toggleSideNav(){
    !this.sideNavIsOpen?this.menuBoxIsOpen=false:this.menuBoxIsOpen=false;
    this.sideNavIsOpen=!this.sideNavIsOpen;
  }
  toggleMenuBox(){
    this.menuBoxIsOpen=!this.menuBoxIsOpen;
  }
  onTyping(){
    if(!this.menuBoxIsOpen)
    this.menuBoxIsOpen=true;

  }
  openingAMenu(menuName:any){
    if(this.openedWindows.indexOf(menuName.name)==-1)
    this.openedWindows.push(menuName.name);

    this.router.navigateByUrl(menuName.route)
    this.toggleSideNav();
    
     

  }
  navigate(path:string){
    this.router.navigateByUrl(path)

  }
  setUser(){
    this.username=sessionStorage.getItem("username")
  }

}
