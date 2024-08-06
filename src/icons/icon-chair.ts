import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-chair',
  template: `
  <ng-template #template>







  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 9.33317C16.6667 7.85317 17.8533 6.6665 19.3333 6.6665H24C25.4667 6.6665 26.6667 7.8665 26.6667 9.33317V12.2132C25.12 12.7598 24 14.2265 24 15.9598V18.6665H16.6667V9.33317ZM8 15.9465V18.6665H15.3333V9.33317C15.3333 7.85317 14.1467 6.6665 12.6667 6.6665H8C6.53334 6.6665 5.33334 7.8665 5.33334 9.33317V12.1998C6.88 12.7465 8 14.2265 8 15.9465ZM27.5467 13.3732C26.24 13.5865 25.3333 14.8265 25.3333 16.1598V19.9998H6.66667V15.9998C6.66667 15.2926 6.38572 14.6143 5.88562 14.1142C5.38552 13.6141 4.70725 13.3332 4 13.3332C3.29276 13.3332 2.61448 13.6141 2.11438 14.1142C1.61429 14.6143 1.33334 15.2926 1.33334 15.9998V22.6665C1.33334 24.1332 2.53334 25.3332 4 25.3332V27.9998H6.66667V25.3332H25.3333V27.9998H28V25.3332C29.4667 25.3332 30.6667 24.1332 30.6667 22.6665V15.9998C30.6667 14.3865 29.2133 13.0932 27.5467 13.3732Z" fill="#F64444"/>
</svg>




  </ng-template>
  `,

})
export class ChairIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
