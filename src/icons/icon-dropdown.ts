import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-dropdown',
  template: `
  <ng-template #template>





<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 9.98337C7.9111 9.98337 7.8251 9.9667 7.74199 9.93337C7.65844 9.90003 7.58888 9.85559 7.53333 9.80003L4.46666 6.73337C4.34444 6.61114 4.28333 6.45559 4.28333 6.2667C4.28333 6.07781 4.34444 5.92225 4.46666 5.80003C4.58888 5.67781 4.74444 5.6167 4.93333 5.6167C5.12221 5.6167 5.27777 5.67781 5.39999 5.80003L7.99999 8.40003L10.6 5.80003C10.7222 5.67781 10.8778 5.6167 11.0667 5.6167C11.2555 5.6167 11.4111 5.67781 11.5333 5.80003C11.6555 5.92225 11.7167 6.07781 11.7167 6.2667C11.7167 6.45559 11.6555 6.61114 11.5333 6.73337L8.46666 9.80003C8.39999 9.8667 8.32777 9.91381 8.24999 9.94137C8.17221 9.96937 8.08888 9.98337 7.99999 9.98337Z" fill="#777C88"/>
</svg>



  </ng-template>
  `,

})
export class DropdownIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
