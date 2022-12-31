import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  clickedButton: any;

  executeStopper($event: any) {
    console.log('section에서', $event);
    this.clickedButton = $event;
  }
}
