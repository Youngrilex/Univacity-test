import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes =[
  {
    path:"",
    loadComponent:()=> import("./homepage/homepage.component").then((h)=>h.Homepage)
  },
  {
    path:"home",
    loadComponent:()=> import("./homepage/homepage.component").then((h)=>h.Homepage)
  },
  {
    path:"search",
    loadComponent:()=> import("./searchpage/searchpage.component").then((h)=>h.SearchPage)
  },

]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ViewRoutingModule {}
