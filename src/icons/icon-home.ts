import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-home',
  template: `
  <ng-template #template>






  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 27.9998C7.26667 27.9998 6.63911 27.7389 6.11733 27.2172C5.59467 26.6945 5.33333 26.0665 5.33333 25.3332V13.3332C5.33333 12.9109 5.428 12.5109 5.61733 12.1332C5.80578 11.7554 6.06667 11.4443 6.4 11.1998L14.4 5.19984C14.6444 5.02206 14.9 4.88873 15.1667 4.79984C15.4333 4.71095 15.7111 4.6665 16 4.6665C16.2889 4.6665 16.5667 4.71095 16.8333 4.79984C17.1 4.88873 17.3556 5.02206 17.6 5.19984L25.6 11.1998C25.9333 11.4443 26.1947 11.7554 26.384 12.1332C26.5724 12.5109 26.6667 12.9109 26.6667 13.3332V25.3332C26.6667 26.0665 26.4058 26.6945 25.884 27.2172C25.3613 27.7389 24.7333 27.9998 24 27.9998H18.6667V18.6665H13.3333V27.9998H8Z" fill="#F64444"/>
</svg>





  </ng-template>
  `,

})
export class HomeIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
