import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-portefeuilles',
  templateUrl: './portefeuilles.component.html',
  styleUrls: ['./portefeuilles.component.css']
})
export class PortefeuillesComponent implements OnInit {
  searchForm!:FormGroup;
  wallets:any
   



  constructor(private walletService:WalletService,private formBuilder: FormBuilder){

    this.searchForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      active: [false, Validators.required],
      external_code: ['', Validators.required],
      status: ['DRAFT', Validators.required],

    });
    
  
  
  }
  

  ngOnInit(): void {

    this.walletService.getAllWallets().subscribe((data)=>{
      this.wallets=data;
      console.log(this.wallets)




    },(error)=>{

      console.log(error)
    })
     
  }
  onType(){
     
     
    this.walletService.searchService(this.searchForm).subscribe((data)=>{

      this.wallets=data

    },(error)=>{})
  }


}
