import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-grid',
  template: `
  <ng-template #template>





  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.45 11 3.979 10.804 3.587 10.412C3.19567 10.0207 3 9.55 3 9V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H9C9.55 3 10.021 3.19567 10.413 3.587C10.8043 3.979 11 4.45 11 5V9C11 9.55 10.8043 10.0207 10.413 10.412C10.021 10.804 9.55 11 9 11H5ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V15C3 14.45 3.19567 13.979 3.587 13.587C3.979 13.1957 4.45 13 5 13H9C9.55 13 10.021 13.1957 10.413 13.587C10.8043 13.979 11 14.45 11 15V19C11 19.55 10.8043 20.021 10.413 20.413C10.021 20.8043 9.55 21 9 21H5ZM15 11C14.45 11 13.9793 10.804 13.588 10.412C13.196 10.0207 13 9.55 13 9V5C13 4.45 13.196 3.979 13.588 3.587C13.9793 3.19567 14.45 3 15 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V9C21 9.55 20.8043 10.0207 20.413 10.412C20.021 10.804 19.55 11 19 11H15ZM15 21C14.45 21 13.9793 20.8043 13.588 20.413C13.196 20.021 13 19.55 13 19V15C13 14.45 13.196 13.979 13.588 13.587C13.9793 13.1957 14.45 13 15 13H19C19.55 13 20.021 13.1957 20.413 13.587C20.8043 13.979 21 14.45 21 15V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H15Z" fill="#184EC9"/>
</svg>





  </ng-template>
  `,

})
export class GridIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
