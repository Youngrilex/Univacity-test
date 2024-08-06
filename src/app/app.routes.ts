import { Routes } from '@angular/router';
import { Homepage } from './views/homepage/homepage.component';
import { SearchPage } from './views/searchpage/searchpage.component';

export const routes: Routes = [
  {
    path:"",
    loadChildren:()=> import('./views/views.module').then((v)=>v.ViewsModule)

  },
  {
    path:"**",
    loadChildren:()=> import('./views/views.module').then((v)=>v.ViewsModule)

  },

];
