import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { IconModule } from '../../icons/icon.module';

@Component({
  selector: 'app-sidebar-filters',
  standalone: true,
  templateUrl: './sidebar-filters.component.html',
  imports: [MatSliderModule,IconModule],
   styleUrl: './sidebar-filters.component.css'
})
export class SidebarFiltersComponent {

}
