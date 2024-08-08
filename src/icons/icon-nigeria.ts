import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-nigeria',
  template: `
  <ng-template #template>




  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2910)">
<path d="M1.77778 2.22223C1.30628 2.22223 0.854097 2.40953 0.520699 2.74293C0.187301 3.07633 0 3.52851 0 4.00001L0 12C0 12.4715 0.187301 12.9237 0.520699 13.2571C0.854097 13.5905 1.30628 13.7778 1.77778 13.7778H5.33333V2.22223H1.77778Z" fill="#009A49"/>
<path d="M5.33334 2.22223H10.6667V13.7778H5.33334V2.22223Z" fill="#EEEEEE"/>
<path d="M14.2222 2.22223H10.6667V13.7778H14.2222C14.6937 13.7778 15.1459 13.5905 15.4793 13.2571C15.8127 12.9237 16 12.4715 16 12V4.00001C16 3.52851 15.8127 3.07633 15.4793 2.74293C15.1459 2.40953 14.6937 2.22223 14.2222 2.22223Z" fill="#009A49"/>
</g>
<defs>
<clipPath id="clip0_1_2910">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>



  </ng-template>
  `,

})
export class NigeriaIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
