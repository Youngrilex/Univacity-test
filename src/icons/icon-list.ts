import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-list',
  template: `
  <ng-template #template>






  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 9.5C1.08333 9.5 0.729333 9.354 0.438 9.062C0.146 8.77067 0 8.41667 0 8C0 7.58333 0.146 7.22933 0.438 6.938C0.729333 6.646 1.08333 6.5 1.5 6.5C1.91667 6.5 2.27067 6.646 2.562 6.938C2.854 7.22933 3 7.58333 3 8C3 8.41667 2.854 8.77067 2.562 9.062C2.27067 9.354 1.91667 9.5 1.5 9.5ZM1.5 3.5C1.08333 3.5 0.729333 3.354 0.438 3.062C0.146 2.77067 0 2.41667 0 2C0 1.58333 0.146 1.22933 0.438 0.938C0.729333 0.646 1.08333 0.5 1.5 0.5C1.91667 0.5 2.27067 0.646 2.562 0.938C2.854 1.22933 3 1.58333 3 2C3 2.41667 2.854 2.77067 2.562 3.062C2.27067 3.354 1.91667 3.5 1.5 3.5ZM1.5 15.5C1.08333 15.5 0.729333 15.354 0.438 15.062C0.146 14.7707 0 14.4167 0 14C0 13.5833 0.146 13.2293 0.438 12.938C0.729333 12.646 1.08333 12.5 1.5 12.5C1.91667 12.5 2.27067 12.646 2.562 12.938C2.854 13.2293 3 13.5833 3 14C3 14.4167 2.854 14.7707 2.562 15.062C2.27067 15.354 1.91667 15.5 1.5 15.5ZM6 15C5.71667 15 5.47933 14.904 5.288 14.712C5.096 14.5207 5 14.2833 5 14C5 13.7167 5.096 13.4793 5.288 13.288C5.47933 13.096 5.71667 13 6 13H17C17.2833 13 17.5207 13.096 17.712 13.288C17.904 13.4793 18 13.7167 18 14C18 14.2833 17.904 14.5207 17.712 14.712C17.5207 14.904 17.2833 15 17 15H6ZM6 9C5.71667 9 5.47933 8.904 5.288 8.712C5.096 8.52067 5 8.28333 5 8C5 7.71667 5.096 7.479 5.288 7.287C5.47933 7.09567 5.71667 7 6 7H17C17.2833 7 17.5207 7.09567 17.712 7.287C17.904 7.479 18 7.71667 18 8C18 8.28333 17.904 8.52067 17.712 8.712C17.5207 8.904 17.2833 9 17 9H6ZM6 3C5.71667 3 5.47933 2.90433 5.288 2.713C5.096 2.521 5 2.28333 5 2C5 1.71667 5.096 1.479 5.288 1.287C5.47933 1.09567 5.71667 1 6 1H17C17.2833 1 17.5207 1.09567 17.712 1.287C17.904 1.479 18 1.71667 18 2C18 2.28333 17.904 2.521 17.712 2.713C17.5207 2.90433 17.2833 3 17 3H6Z" fill="#777C88"/>
</svg>




  </ng-template>
  `,

})
export class ListIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
