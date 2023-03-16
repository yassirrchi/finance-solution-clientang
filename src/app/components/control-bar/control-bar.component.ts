import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent {
  @Input() lockForm!: boolean;
  @Output() unlockFormEvent = new EventEmitter<void>();
  unlockForm(): void {
    this.unlockFormEvent.emit();
  }

}
