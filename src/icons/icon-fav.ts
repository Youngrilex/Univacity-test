import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-fav',
  template: `
  <ng-template #template>







  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.7712 18.0817 14.5791 17.5139 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z" fill="#111111"/>
</svg>





  </ng-template>
  `,

})
export class FavIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
