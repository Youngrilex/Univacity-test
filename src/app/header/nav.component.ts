import {  Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IconModule } from '../../icons/icon.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconModule,CommonModule, RouterLink],
  templateUrl: './nav.component.html',
   styleUrl: './nav.component.css'
})
export class NavComponent {
  navbarOpen:boolean= false;




  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log('Navbar state:', this.navbarOpen);
  }
}
