import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fond',
  templateUrl: './fond.component.html',
  styleUrls: ['./fond.component.css']
})
export class FondComponent {
  fondForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.fondForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      active: [false, Validators.required],
      external_code: ['', Validators.required],
      status: ['DRAFT', Validators.required],

    });
  }

  



  lockForm:boolean=true;
  unlockForm(){
    this.lockForm=false
  }
  onsubmit(){
    alert(this.fondForm.controls['code'].value+" "+this.fondForm.controls['name'].value+" "+this.fondForm.controls['active'].value+this.fondForm.controls['external_code'].value)
     
     

  }

}
