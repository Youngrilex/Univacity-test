import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-cap',
  template: `
  <ng-template #template>







  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3333 10.6665C21.3333 13.6132 18.9466 15.9998 16 15.9998C13.0533 15.9998 10.6666 13.6132 10.6666 10.6665L10.8133 9.41317L6.66665 7.33317L16 2.6665L25.3333 7.33317V13.9998H24V7.99984L21.1866 9.41317L21.3333 10.6665ZM16 18.6665C21.8933 18.6665 26.6666 21.0532 26.6666 23.9998V26.6665H5.33331V23.9998C5.33331 21.0532 10.1066 18.6665 16 18.6665Z" fill="#F64444"/>
</svg>




  </ng-template>
  `,

})
export class CapIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
