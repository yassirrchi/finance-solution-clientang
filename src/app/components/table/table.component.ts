import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() wallets:any;
  @Input() operations:any;
  @Input() fund:any;
  @Input()
  ShowOerationDetail!: ((id: number) => void);
  @Output() operationPickedId = new EventEmitter<number>();
  @Output() showingType=new EventEmitter<string>();
  @Output() open = new EventEmitter<boolean>();
  //W:WALLET, O:OPERATION, F:FUND, T tiers
  

  openDetail(id:number,type:string){

    this.open.emit(true);
    this.operationPickedId.emit(id);
    this.showingType.emit(type)
    

  }
  

  pickOperationId(id:number){
     
    this.operationPickedId.emit(id);

  }
  
  
  
  

}
