import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuOption } from 'src/app/Models/wallet.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NotificationsService } from 'src/app/Services/notifications.service';
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
  openedWindows!:MenuOption[]
  allMenuOptions!:MenuOption[]
  username!:any;
  defaultOptions:MenuOption[]=[
    {name:"PorteFeuille",route:"/portefeuille",path:"autres>portefeuilles"},
    {name:"Actions",route:"/operation",path:"Transactions à Placements / Financements à Action à Opérations sur titre"},
    {name:"Perimetre",route:"/tiers",path:"autres>config"},
    {name:"Menu/Roles",route:"/tiers",path:"autres>config"},
    {name:"Entite Tiers",route:"/tiers",path:"autres>config"},
    {name:"Portefeuilles",route:"/portefeuille/portefeuilles",path:"autres>config"},
    {name:"Fond",route:"/fond",path:"autres>config"},
    {name:"Dashboard",route:"/",path:"autres>config"}
    ,
    {name:"Dashboard",route:"/",path:"autres>config"}


]
notifications:any={};
  searchInput!:FormGroup;
  constructor(private location: Location,private router:Router,private formBuilder: FormBuilder,private notificationService:NotificationsService) {
    this.searchInput = this.formBuilder.group({
      search: [''],
      
    });
    

  }


  ngOnInit(): void {
    
    this.setUser()
    
     

    this.notificationBoxIsOpen=false;
    this.sideNavIsOpen=false;

    this.userBoxIsOpen=false;
    this.menuBoxIsOpen=false;
    this.openedWindows=[];
    this.allMenuOptions=this.defaultOptions
    this.fetchNewNotifications()
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

    if(this.searchInput.controls["search"].value=="")
    this.allMenuOptions=this.defaultOptions


    console.log(this.searchInput.controls["search"].value)
    this.allMenuOptions=this.defaultOptions.filter(op=>op.name.toLowerCase().includes(this.searchInput.controls["search"].value.toLowerCase()))
     

  }
  
  openingAMenu(menuName:any){

     if(this.openedWindows.findIndex(obj => obj.name=== menuName.name)==-1)
     this.openedWindows.push(menuName)
     this.router.navigateByUrl(menuName.route)
    this.toggleSideNav();
     
    
     
    
     

  }
  navigate(path:string){
    this.router.navigateByUrl(path)

  }
  setUser(){
    this.username=sessionStorage.getItem("username")
  }
  signOut(){
    this.router.navigateByUrl("/login")
  }
  navToSettings(){
    this.router.navigateByUrl("/user/settings")

  }
  fetchNewNotifications(){
    setInterval(()=>{
      this.getAllNotifications();
       
    },4000)
  }
  getAllNotifications(){
    this.notificationService.getAllNotifications().subscribe((data)=>{

      this.notifications=data;
      console.log(this.notifications)
    },(error)=>{
      alert(2)
    })

  }

}
