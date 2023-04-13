import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  @Output() showModal=new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<boolean>();
  @Input() inputData:any
  //type tiers[] or operationNote or wallet or fond

  closeDetail(){

    this.closed.emit(false);

  }
  showModalDetail(){
    this.showModal.emit(false);
    this.closed.emit(false);
  
  }

  


}
