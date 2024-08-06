import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";



@Component({
  selector:"app-views",
  standalone:true,
  imports:[CommonModule,RouterOutlet]
})

export class ViewComponent {}
