import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-payment',
  template: `
  <ng-template #template>






  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.288 2.85718C2.71968 2.85718 2.17463 3.08294 1.77277 3.48481C1.37091 3.88667 1.14514 4.43171 1.14514 5.00003V5.42861H14.8571V5.00003C14.8571 4.43171 14.6314 3.88667 14.2295 3.48481C13.8276 3.08294 13.2826 2.85718 12.7143 2.85718H3.288ZM1.14514 11V6.28575H14.8571V11C14.8571 11.5684 14.6314 12.1134 14.2295 12.5153C13.8276 12.9171 13.2826 13.1429 12.7143 13.1429H3.28857C2.72025 13.1429 2.17521 12.9171 1.77334 12.5153C1.37148 12.1134 1.14571 11.5684 1.14571 11H1.14514ZM10.4286 9.42861C10.3149 9.42861 10.2059 9.47376 10.1255 9.55413C10.0452 9.6345 10 9.74351 10 9.85718C10 9.97084 10.0452 10.0799 10.1255 10.1602C10.2059 10.2406 10.3149 10.2857 10.4286 10.2857H12.4286C12.5422 10.2857 12.6512 10.2406 12.7316 10.1602C12.812 10.0799 12.8571 9.97084 12.8571 9.85718C12.8571 9.74351 12.812 9.6345 12.7316 9.55413C12.6512 9.47376 12.5422 9.42861 12.4286 9.42861H10.4286Z" fill="#52555D"/>
</svg>




  </ng-template>
  `,

})
export class PaymentIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
