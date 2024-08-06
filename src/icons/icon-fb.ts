import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-fb',
  template: `
  <ng-template #template>







<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="8" fill="#F64444"/>
<path d="M19.3398 16.8333L19.7102 14.4202H17.3948V12.8543C17.3948 12.1942 17.7182 11.5507 18.7552 11.5507H19.8078V9.49627C19.8078 9.49627 18.8526 9.33325 17.9393 9.33325C16.0326 9.33325 14.7862 10.489 14.7862 12.5812V14.4202H12.6667V16.8333H14.7862V22.6666H17.3948V16.8333H19.3398Z" fill="white"/>
</svg>





  </ng-template>
  `,

})
export class FbIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
