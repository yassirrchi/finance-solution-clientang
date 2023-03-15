import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  lockForm:boolean=true;
  wallets!:any;

  constructor(private walletService:WalletService){}



  ngOnInit(): void {
    this.wallets=this.walletService.getAllWallets().subscribe((data)=>{this.wallets=data},(error)=>{console.log(error)})
     
  }

  unlockForm(){
    this.lockForm=false
  }


}



