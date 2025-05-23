import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TiersService } from 'src/app/Services/tiers.service';
import { WalletService } from 'src/app/Services/wallet.service';
declare let alertify:any;
@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent {
  tiersForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private tiersService:TiersService,private router:Router) {
    this.tiersForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      active: [false, Validators.required],
      external_code: ['', Validators.required],
      status: ['DRAFT', Validators.required],
      contrepartie:[false,Validators.required],
      banque:[false,Validators.required],
      depositaire:[false,Validators.required],


    });
  }
  lockForm:boolean=true;

  unlockForm(){
    this.lockForm=false
  }
  onsubmit(){
        //alert(this.tiersForm.controls['code'].value+" "+this.tiersForm.controls['name'].value+" "+this.tiersForm.controls['active'].value+this.tiersForm.controls['external_code'].value+this.tiersForm.controls['status'].value+this.tiersForm.controls['external_code'].value+this.tiersForm.controls['banque'].value+this.tiersForm.controls['depositaire'].value+this.tiersForm.controls['contrepartie'].value)
        this.tiersService.createEntiteTiers(this.tiersForm).subscribe((data)=>{
          alertify.success("new tiers added")



        },(error)=>{


          console.log(error)
          alertify.error("went wron")
        })


        //handle service




  }

  

}
