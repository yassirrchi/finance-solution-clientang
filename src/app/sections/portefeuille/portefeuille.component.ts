import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/Services/wallet.service';
declare let alertify:any;

@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css']
})
export class PortefeuilleComponent {
  walletForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private walletService:WalletService) {
    this.walletForm = this.formBuilder.group({
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
    //alert(this.walletForm.controls['code'].value+" "+this.walletForm.controls['name'].value+" "+this.walletForm.controls['active'].value+this.walletForm.controls['external_code'].value+this.walletForm.controls['status'].value)
    this.walletService.createWallet(this.walletForm).subscribe((data)=>{

      alertify.success("wallet"+data.code+" ... saved as "+data.status)



    },(error)=>{
      console.log(error)

      alertify.error("something went wrong ")



    })

  }

  

}
