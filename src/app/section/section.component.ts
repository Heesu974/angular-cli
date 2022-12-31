import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  present: any = 0;

  startTime($event: any) {
    console.log('section에서', $event);
    this.present = $event;
  }
}
