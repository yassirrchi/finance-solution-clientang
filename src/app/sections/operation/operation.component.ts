import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntiteTiers } from 'src/app/Models/EntiteTiers.model';
import { ActionService } from 'src/app/Services/action.service';
import { FundService } from 'src/app/Services/fund.service';
import { TiersService } from 'src/app/Services/tiers.service';
import { WalletService } from 'src/app/Services/wallet.service';
declare let alertify:any;

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
  funds!:any;
  banks!:EntiteTiers[];
  depositaires!:EntiteTiers[];
  contreparties!:EntiteTiers[];
  operations!:any;
  showSearch!:boolean
  formVisibile!:boolean;
  pickedOperationId:number=0;
   
  detailedOperation!:any;

  showOperationDetails:boolean=false;
  displayDetails:boolean=false;
    

  

   
  constructor(private walletService:WalletService,private formBuilder: FormBuilder,private router:Router,private tiersService:TiersService,private fundsService:FundService,private actionService:ActionService) {
    
    this.showSearch=false;
    this.formVisibile=true;
     
    
     
    this.operationForm = this.formBuilder.group({
      quantite: [null, Validators.required],
      price: [null, Validators.required],
      fundid: [null, Validators.required],
      walletid: [null, Validators.required],
      date_val:[null,Validators.required],
      date_op:[null,Validators.required],
      typeop: [null, Validators.required],
      statut: [null, Validators.required],
      createdby:sessionStorage.getItem("userId")


    });
  }
  toggleForm() {

    this.pickedOperationId=0
    
    this.formVisibile=!this.formVisibile;
  }

  typing(){

     

    
    if(this.operationForm.controls['quantite'].value!=null&&this.operationForm.controls['price'].value!=null)
    this.montant=this.operationForm.controls['quantite'].value*this.operationForm.controls['price'].value
    else
    this.montant=null


    //alert(this.operationForm.controls['quantite'].value+" "+this.operationForm.controls['prix'].value+" equals="+this.montant)



  }
  handleSearch(){
   // if(this.formVisibile==true)
    //this.formVisibile=false
    
    this.showSearch=!this.showSearch

  }
  onsubmit(){

   // alert(this.operationForm.controls['walletid'].value+" "+this.operationForm.controls['price'].value+" ")
    
    this.actionService.createOperation(this.operationForm).subscribe((data)=>{

       
      alertify.message("✔️ Operation creer ")
       



    },(error)=>{
      console.log(error)

      
      alertify.message("❌ Operation non creer (verifier votre connexion📡ou serveur) ")




    })
    
     
    

   
   


  }



  ngOnInit(): void {
     

    this.getAllOperations()

    this.wallets=this.walletService.getAllWallets().subscribe((data)=>{this.wallets=data},(error)=>{console.log(error)})
    this.funds=this.fundsService.getAllFunds().subscribe((data)=>{this.funds=data},(error)=>{console.log(error)})
    
    this.montant=null;
    this.tiers=this.tiersService.getEntiteTiers().subscribe((data)=>{
       

      this.tiers=data;
      this.banks=this.tiers.filter((tiers: { bank: boolean; })=>tiers.bank==true)
  // console.log(this.banks)
    this.depositaires=this.tiers.filter((tiers: { custodian: boolean; })=>tiers.custodian==true)
   // console.log(this.depositaires)
    this.contreparties=this.tiers.filter((tiers: { counterparty: boolean; })=> tiers.counterparty==true)
    console.log(this.contreparties)
    
      

    },(error)=>{
      console.log(error)


    })
    
    
     
  }

  unlockForm(){
    this.lockForm=false
  }

  getAllOperations(){
    this.actionService.getAllOperations().subscribe((data)=>{
      this.operations=data

    },(error)=>{
      console.log(error)


    })
    

  }

  ShowOerationDetail(id:number){
   
    
    

    

  }
  setPickedOperationId(id:number){
     
    this.pickedOperationId=id;
    this.actionService.getOperation(this.pickedOperationId).subscribe(
      (data)=>{

        this.detailedOperation=data
        console.log(this.detailedOperation)

      },(error)=>{
        console.log(error)
      })
     

  



  }
  displayOperationDetails(display:any){

    
    
       
    
     
    this.displayDetails=display
  }
   
  
  



}



