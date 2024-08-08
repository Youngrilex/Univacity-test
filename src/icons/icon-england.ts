import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-england',
  template: `
  <ng-template #template>





  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_3028)">
<path d="M10.6667 1.66666H1.33333C0.979711 1.66666 0.640573 1.80713 0.390524 2.05718C0.140476 2.30723 0 2.64637 0 2.99999L0 8.99999C0 9.35361 0.140476 9.69275 0.390524 9.9428C0.640573 10.1928 0.979711 10.3333 1.33333 10.3333H10.6667C11.0203 10.3333 11.3594 10.1928 11.6095 9.9428C11.8595 9.69275 12 9.35361 12 8.99999V2.99999C12 2.64637 11.8595 2.30723 11.6095 2.05718C11.3594 1.80713 11.0203 1.66666 10.6667 1.66666Z" fill="#EEEEEE"/>
<path d="M7 1.66666H5V4.99999H0V6.99999H5V10.3333H7V6.99999H12V4.99999H7V1.66666Z" fill="#CE1124"/>
</g>
<defs>
<clipPath id="clip0_1_3028">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>



  </ng-template>
  `,

})
export class EnglandIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
