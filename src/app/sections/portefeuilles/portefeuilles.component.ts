import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-portefeuilles',
  templateUrl: './portefeuilles.component.html',
  styleUrls: ['./portefeuilles.component.css']
})
export class PortefeuillesComponent implements OnInit {
  wallets:any



  constructor(private walletService:WalletService){}

  ngOnInit(): void {

    this.walletService.getAllWallets().subscribe((data)=>{
      this.wallets=data;
      console.log(this.wallets)




    },(error)=>{

      console.log(error)
    })
     
  }


}
