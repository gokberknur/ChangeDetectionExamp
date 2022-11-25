import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, Component2Component],
})
export class Component1Component implements DoCheck {
  @Output() component1ClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() inputfromRoot: string | undefined;

  tempFunc() {
    console.log('COMPONENT 1 TEMPLATE FUNC func');
  }

  ngDoCheck(): void {
    console.log('component 1 doCheck() RAN');
  }

  clicked() {
    this.component1ClickEvent.emit;
  }
}
