import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-linkedin',
  template: `
  <ng-template #template>







  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="8" fill="#F64444"/>
<path d="M12.3179 22.6666H9.55357V13.7646H12.3179V22.6666ZM10.9343 12.5503C10.0503 12.5503 9.33333 11.8181 9.33333 10.9342C9.33333 10.5096 9.502 10.1024 9.80223 9.80215C10.1025 9.50192 10.5097 9.33325 10.9343 9.33325C11.3588 9.33325 11.7661 9.50192 12.0663 9.80215C12.3665 10.1024 12.5352 10.5096 12.5352 10.9342C12.5352 11.8181 11.8179 12.5503 10.9343 12.5503ZM22.664 22.6666H19.9056V18.3332C19.9056 17.3004 19.8848 15.976 18.4684 15.976C17.0311 15.976 16.8109 17.098 16.8109 18.2587V22.6666H14.0495V13.7646H16.7008V14.9789H16.7394C17.1085 14.2795 18.01 13.5414 19.355 13.5414C22.1527 13.5414 22.667 15.3837 22.667 17.7766V22.6666H22.664Z" fill="white"/>
</svg>






  </ng-template>
  `,

})
export class LinkedinIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
