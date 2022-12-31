import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter<any>();

  executeButton(requestFunc: any) {
    this.clickEvent.emit(requestFunc);
  }
}
