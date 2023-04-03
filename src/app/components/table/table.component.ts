import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() wallets:any;
  @Input() operations:any;
  @Input()
  ShowOerationDetail!: ((id: number) => void);
  @Output() operationPickedId = new EventEmitter<number>();

  pickOperationId(id:number){
    alert(id)
    this.operationPickedId.emit(id);

  }
  
  
  

}
