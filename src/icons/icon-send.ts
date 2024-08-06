import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-send',
  template: `
  <ng-template #template>







  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.86667 25.9002C5.42222 26.078 5 26.0389 4.6 25.7829C4.2 25.5278 4 25.1558 4 24.6669V19.7002C4 19.3891 4.08889 19.1113 4.26667 18.8669C4.44444 18.6225 4.68889 18.4669 5 18.4002L14.6667 16.0002L5 13.6002C4.68889 13.5336 4.44444 13.378 4.26667 13.1336C4.08889 12.8891 4 12.6113 4 12.3002V7.33357C4 6.84468 4.2 6.47224 4.6 6.21624C5 5.96113 5.42222 5.92246 5.86667 6.10024L26.4 14.7669C26.9556 15.0113 27.2333 15.4225 27.2333 16.0002C27.2333 16.578 26.9556 16.9891 26.4 17.2336L5.86667 25.9002Z" fill="#F64444"/>
</svg>




  </ng-template>
  `,

})
export class SendIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
