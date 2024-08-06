import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-play',
  template: `
  <ng-template #template>







  <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.1 49.1C4.76666 49.9666 3.416 50.016 2.048 49.248C0.682667 48.4826 0 47.2999 0 45.7V4.29995C0 2.69995 0.682667 1.51595 2.048 0.747954C3.416 -0.0173793 4.76666 0.0332878 6.1 0.899954L38.7 21.6C39.9 22.4 40.5 23.5333 40.5 25C40.5 26.4666 39.9 27.6 38.7 28.4L6.1 49.1Z" fill="white"/>
</svg>




  </ng-template>
  `,

})
export class PlayIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
