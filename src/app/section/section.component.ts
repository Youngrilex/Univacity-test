import { Component } from '@angular/core';
import { IconModule } from '../../icons/icon.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-section',
  standalone: true,
  imports: [IconModule, CommonModule, RouterLink],
  templateUrl: './section.component.html',

})
export class SectionComponent {

}
