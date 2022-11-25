import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component2Component implements DoCheck {
  myVar: string = 'gokberk ';
  constructor(public cdRef: ChangeDetectorRef) {}

  c2Tempfunc() {
    console.log('component 2 template function RAN');
  }

  ngDoCheck(): void {
    console.log('COMPONENT 2 DOCHECK() RAN');
    this.myVar += 'Checked!';

    // Without below UI will not be updated
    //this.cdRef.markForCheck();
    //this.cdRef.detectChanges();
  }
}
