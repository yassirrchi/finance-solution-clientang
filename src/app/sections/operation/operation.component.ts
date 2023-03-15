import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  lockForm:boolean=true;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  unlockForm(){
    this.lockForm=false
  }


}



