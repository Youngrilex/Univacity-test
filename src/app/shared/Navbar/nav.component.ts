import {  Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IconModule } from '../../../icons/icon.module';
import { Router, RouterLink } from '@angular/router';

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
  }

  isSearchIcon: boolean = true;

  constructor(private router: Router) {}

  onIconClick() {
    if (this.isSearchIcon) {
      this.router.navigate(['/search']);
    } else {
      this.router.navigate(['/home']);
    }
    this.isSearchIcon = !this.isSearchIcon;
  }
}
