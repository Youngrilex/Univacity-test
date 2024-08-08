import { Component, } from '@angular/core';
import { SidebarFiltersComponent } from '../../sidebar-filters/sidebar-filters.component';
import { ProgramsComponent } from '../../programs/programs.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SidebarFiltersComponent,ProgramsComponent],
  templateUrl: './searchpage.component.html',

})
export class SearchPage {

}
