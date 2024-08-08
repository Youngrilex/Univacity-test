import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-closeup',
  template: `
  <ng-template #template>






  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99992 0.0209756C5.11103 0.0209756 5.21853 0.0418096 5.32242 0.0834765C5.42686 0.125143 5.51381 0.180698 5.58325 0.250143L9.41659 4.08348C9.56936 4.23625 9.64575 4.4307 9.64575 4.66681C9.64575 4.90292 9.56936 5.09736 9.41659 5.25014C9.26381 5.40292 9.06936 5.47931 8.83325 5.47931C8.59714 5.47931 8.4027 5.40292 8.24992 5.25014L4.99992 2.00014L1.74992 5.25014C1.59714 5.40292 1.4027 5.47931 1.16658 5.47931C0.930474 5.47931 0.736031 5.40292 0.583253 5.25014C0.430475 5.09736 0.354085 4.90292 0.354085 4.66681C0.354085 4.4307 0.430475 4.23625 0.583253 4.08348L4.41659 0.250143C4.49992 0.16681 4.5902 0.107921 4.68742 0.0734763C4.78464 0.0384765 4.88881 0.0209756 4.99992 0.0209756Z" fill="#111111"/>
</svg>




  </ng-template>
  `,

})
export class CloseupIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
