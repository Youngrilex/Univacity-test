import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { SectionComponent } from '../../section/section.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,SectionComponent],
  templateUrl: './homepage.component.html',

})
export class Homepage {

}
