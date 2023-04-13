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
  @Output() open = new EventEmitter<boolean>();

  openDetail(){

    this.open.emit(true);

  }
  

  pickOperationId(id:number){
     
    this.operationPickedId.emit(id);

  }
  
  
  
  

}
