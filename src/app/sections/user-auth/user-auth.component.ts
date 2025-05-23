import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
declare let alertify:any;

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  userForm: FormGroup;
  loading!:boolean;

  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      theme: ['', [Validators.required]],
      remember: [false, Validators.required]
    });
  }

  ngOnInit() {

    this.resetSessionData()
    this.loading=false;
    
  }
  onsubmit(){
    this.loading=true
     
    this.userService.login(this.userForm).subscribe(
      (data)=>{
        this.setSessionData(data.username,data.id)
        alertify.success("connection successful")
        this.loading=false;
        this.router.navigateByUrl("/")


    },(error)=>{


      console.log(error)
      this.loading=false;
      alertify.error("something went wrong")


    })


    
     
    

  }

  setSessionData(username:string,userId:string){
    sessionStorage.setItem("userId",userId)
    sessionStorage.setItem("username",username)
    

  }
  resetSessionData(){
    sessionStorage.setItem("userId","")
    sessionStorage.setItem("username","")
    sessionStorage.setItem("role","")

  }
  


}




  

  




  


