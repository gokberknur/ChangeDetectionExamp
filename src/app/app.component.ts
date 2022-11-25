import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Component1Component } from './component1/component1.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [Component1Component],
})
export class AppComponent implements DoCheck {
  text = 'hello';

  changeText() {
    this.text += ' Check';
  }
  rootTempFunc() {
    console.log('rootTempFunc');
  }

  c1Clicked() {
    console.log('component 1 click event');
  }

  ngDoCheck() {
    console.log('doCheck() for root');
  }
}
