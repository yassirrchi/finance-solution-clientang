import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntiteTiers } from 'src/app/Models/EntiteTiers.model';
import { TiersService } from 'src/app/Services/tiers.service';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  lockForm:boolean=true;
  wallets!:any;
  tiers!:any;

  operationForm!:FormGroup;
  montant!:any;

  banks!:EntiteTiers[];
  depositaires!:EntiteTiers[];
  contreparties!:EntiteTiers[];
    

  

   
  constructor(private walletService:WalletService,private formBuilder: FormBuilder,private router:Router,private tiersService:TiersService) {
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
    this.tiers=this.tiersService.getEntiteTiers().subscribe((data)=>{
       

      this.tiers=data;
      this.banks=this.tiers.filter((tiers: { bank: boolean; })=>tiers.bank==true)
  // console.log(this.banks)
    this.depositaires=this.tiers.filter((tiers: { counterparty: boolean; })=>tiers.counterparty==true)
   // console.log(this.depositaires)
    this.contreparties=this.tiers.filter((tiers: { custodian: boolean; })=>tiers.custodian==true)
    console.log(this.contreparties)
    
      

    },(error)=>{
      console.log(error)


    })
    
    
     
  }

  unlockForm(){
    this.lockForm=false
  }


}



