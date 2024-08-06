import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-search',
  template: `
  <ng-template #template>






  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6667 18.6666H19.6133L19.24 18.3066C20.0733 17.3386 20.6823 16.1983 21.0234 14.9675C21.3645 13.7366 21.4294 12.4455 21.2133 11.1866C20.5867 7.47997 17.4933 4.51997 13.76 4.06663C12.4475 3.90059 11.1144 4.037 9.8627 4.46542C8.61101 4.89384 7.47392 5.60292 6.53844 6.53841C5.60296 7.47389 4.89387 8.61098 4.46545 9.86267C4.03703 11.1144 3.90062 12.4475 4.06666 13.76C4.52 17.4933 7.48 20.5866 11.1867 21.2133C12.4455 21.4294 13.7366 21.3645 14.9675 21.0234C16.1984 20.6822 17.3386 20.0732 18.3067 19.24L18.6667 19.6133V20.6666L24.3333 26.3333C24.88 26.88 25.7733 26.88 26.32 26.3333C26.8667 25.7866 26.8667 24.8933 26.32 24.3466L20.6667 18.6666ZM12.6667 18.6666C9.34666 18.6666 6.66666 15.9866 6.66666 12.6666C6.66666 9.34663 9.34666 6.66663 12.6667 6.66663C15.9867 6.66663 18.6667 9.34663 18.6667 12.6666C18.6667 15.9866 15.9867 18.6666 12.6667 18.6666Z" fill="#111111"/>
</svg>




  </ng-template>
  `,

})
export class SearchIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
