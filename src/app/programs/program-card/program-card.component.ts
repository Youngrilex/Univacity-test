import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconModule } from '../../../icons/icon.module';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule,IconModule],
  templateUrl: './program-card.component.html',
})
export class ProgramCardComponent {
  @Input() program: any;

}
