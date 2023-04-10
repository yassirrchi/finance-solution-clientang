import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FundService } from 'src/app/Services/fund.service';
declare let alertify:any;
@Component({
  selector: 'app-fond',
  templateUrl: './fond.component.html',
  styleUrls: ['./fond.component.css']
})
export class FondComponent {
  fondForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router,private fundService:FundService) {
    this.fondForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      active: [false, Validators.required],
      external_code: ['', Validators.required],
      status: ['DRAFT', Validators.required],

    });
  }

  



  lockForm:boolean=true;
  unlockForm(){
    this.lockForm=false
  }
  onsubmit(){

    this.fundService.createFund(this.fondForm).subscribe((data)=>{

      alertify.message("fund cree ✔️  ")
      



    },(error)=>{
      console.log(error)

      alertify.error("something went wrong ")



    })
      
     

  }

}
