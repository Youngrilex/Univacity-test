import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-graph',
  template: `
  <ng-template #template>






  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.69999 17.3C2.51665 17.1167 2.42499 16.8873 2.42499 16.612C2.42499 16.3373 2.51665 16.1 2.69999 15.9L8.69999 9.85C8.79999 9.76667 8.90832 9.7 9.02499 9.65C9.14165 9.6 9.26665 9.575 9.39999 9.575C9.53332 9.575 9.66265 9.6 9.78799 9.65C9.91265 9.7 10.0167 9.76667 10.1 9.85L13.4 13.15L18.6 8H17C16.7167 8 16.4793 7.90433 16.288 7.713C16.096 7.521 16 7.28333 16 7C16 6.71667 16.096 6.479 16.288 6.287C16.4793 6.09567 16.7167 6 17 6H21C21.2833 6 21.5207 6.09567 21.712 6.287C21.904 6.479 22 6.71667 22 7V11C22 11.2833 21.904 11.5207 21.712 11.712C21.5207 11.904 21.2833 12 21 12C20.7167 12 20.4793 11.904 20.288 11.712C20.096 11.5207 20 11.2833 20 11V9.4L14.1 15.3C14 15.4 13.8917 15.4707 13.775 15.512C13.6583 15.554 13.5333 15.575 13.4 15.575C13.2667 15.575 13.1417 15.554 13.025 15.512C12.9083 15.4707 12.8 15.4 12.7 15.3L9.39999 12L4.07499 17.325C3.89165 17.5083 3.66665 17.6 3.39999 17.6C3.13332 17.6 2.89999 17.5 2.69999 17.3Z" fill="#111111"/>
</svg>




  </ng-template>
  `,

})
export class GraphIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
