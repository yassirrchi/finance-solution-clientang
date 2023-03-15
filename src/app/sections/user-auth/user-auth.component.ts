import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
declare let alertify:any;

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]],
      theme: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false, Validators.required]
    });
  }

  ngOnInit() {
    
  }
  onsubmit(){
    //alert(this.userForm.controls['username'].value+" "+this.userForm.controls['remember'].value+" "+this.userForm.controls['theme'].value)
    alertify.success("jhhj")
    alertify.error("d")
    this.router.navigateByUrl("/operation")

  }
  


}




  

  




  


