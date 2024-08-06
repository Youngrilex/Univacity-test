import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-bookings',
  template: `
  <ng-template #template>






  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.6667C1.63333 13.6667 1.31956 13.5363 1.05867 13.2754C0.797334 13.014 0.666668 12.7 0.666668 12.3334V1.66671C0.666668 1.30004 0.797334 0.986041 1.05867 0.724707C1.31956 0.463818 1.63333 0.333374 2 0.333374H10C10.3667 0.333374 10.6807 0.463818 10.942 0.724707C11.2029 0.986041 11.3333 1.30004 11.3333 1.66671V12.3334C11.3333 12.7 11.2029 13.014 10.942 13.2754C10.6807 13.5363 10.3667 13.6667 10 13.6667H2ZM5.83333 6.03337L7 5.33337L8.16667 6.03337C8.27778 6.10004 8.38889 6.10004 8.5 6.03337C8.61111 5.96671 8.66667 5.87226 8.66667 5.75004V1.66671H5.33333V5.75004C5.33333 5.87226 5.38889 5.96671 5.5 6.03337C5.61111 6.10004 5.72222 6.10004 5.83333 6.03337Z" fill="#52555D"/>
</svg>



  </ng-template>
  `,

})
export class BookingsIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
