import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  lockForm:boolean=true;
  wallets!:any;
  operationForm!:FormGroup;
  montant!:any;

  

   
  constructor(private walletService:WalletService,private formBuilder: FormBuilder,private router:Router) {
    this.operationForm = this.formBuilder.group({
      quantite: [null, Validators.required],
      prix: [null, Validators.required],

       

    });
  }

  typing(){

     

    
    if(this.operationForm.controls['quantite'].value!=null&&this.operationForm.controls['prix'].value!=null)
    this.montant=this.operationForm.controls['quantite'].value*this.operationForm.controls['prix'].value
    else
    this.montant=null


    //alert(this.operationForm.controls['quantite'].value+" "+this.operationForm.controls['prix'].value+" equals="+this.montant)



  }
  onsubmit(){

    //alert(this.operationForm.controls['quantite'].value+" "+this.operationForm.controls['prix'].value+" ")
    this.typing()


  }



  ngOnInit(): void {

    this.wallets=this.walletService.getAllWallets().subscribe((data)=>{this.wallets=data},(error)=>{console.log(error)})
    this.montant=null;
    
     
  }

  unlockForm(){
    this.lockForm=false
  }


}



