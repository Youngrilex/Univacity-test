import { Component, Input, ViewChild ,ViewContainerRef} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'icon-usa',
  template: `
  <ng-template #template>







  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_3663)">
<path d="M15 2.0625C13.5312 1.15625 11.8438 0.625 10 0.625V2.0625H15Z" fill="#ED4C5C"/>
<path d="M10 3.5H16.75C16.2187 2.96875 15.625 2.46875 15 2.0625H10V3.5Z" fill="white"/>
<path d="M10 4.9375H17.9062C17.5625 4.40625 17.1875 3.9375 16.7812 3.5H10V4.9375Z" fill="#ED4C5C"/>
<path d="M10 6.375H18.6563C18.4375 5.875 18.1875 5.375 17.9063 4.9375H10V6.375Z" fill="white"/>
<path d="M10 7.8125H19.125C19 7.3125 18.8438 6.84375 18.6563 6.375H10V7.8125Z" fill="#ED4C5C"/>
<path d="M10 9.28125H19.3438C19.3125 8.78125 19.2187 8.3125 19.125 7.84375H10V9.28125Z" fill="white"/>
<path d="M19.3438 9.28125H10V10H0.625C0.625 10.25 0.625 10.4687 0.65625 10.7187H19.3438C19.375 10.4687 19.375 10.25 19.375 10C19.375 9.75 19.375 9.5 19.3438 9.28125Z" fill="#ED4C5C"/>
<path d="M0.875 12.1563H19.125C19.25 11.6875 19.3125 11.2188 19.3438 10.7188H0.65625C0.6875 11.1875 0.75 11.6875 0.875 12.1563Z" fill="white"/>
<path d="M1.34375 13.5937H18.6563C18.8438 13.125 19 12.6562 19.125 12.1562H0.875C1 12.6562 1.15625 13.125 1.34375 13.5937Z" fill="#ED4C5C"/>
<path d="M2.09375 15.0312H17.9063C18.1875 14.5625 18.4375 14.0938 18.6563 13.5938H1.34375C1.5625 14.0938 1.8125 14.5625 2.09375 15.0312Z" fill="white"/>
<path d="M3.21875 16.4688H16.7812C17.1875 16.0313 17.5938 15.5312 17.9062 15.0312H2.09375C2.40625 15.5625 2.8125 16.0313 3.21875 16.4688Z" fill="#ED4C5C"/>
<path d="M4.96875 17.9062H15.0312C15.6875 17.5 16.25 17 16.7812 16.4688H3.21875C3.75 17.0312 4.34375 17.5 4.96875 17.9062Z" fill="white"/>
<path d="M10 19.375C11.8438 19.375 13.5625 18.8438 15.0312 17.9062H4.96875C6.4375 18.8438 8.15625 19.375 10 19.375Z" fill="#ED4C5C"/>
<path d="M5 2.0625C4.34375 2.46875 3.75 2.96875 3.21875 3.5C2.78125 3.9375 2.40625 4.4375 2.09375 4.9375C1.8125 5.40625 1.53125 5.875 1.34375 6.375C1.15625 6.84375 1 7.3125 0.875 7.8125C0.75 8.28125 0.6875 8.75 0.65625 9.25C0.625 9.5 0.625 9.75 0.625 10H10V0.625C8.15625 0.625 6.46875 1.15625 5 2.0625Z" fill="#428BC1"/>
<path d="M7.8125 0.9375L7.96875 1.40625H8.4375L8.0625 1.71875L8.1875 2.1875L7.8125 1.90625L7.4375 2.1875L7.5625 1.71875L7.1875 1.40625H7.65625L7.8125 0.9375ZM9.0625 2.8125L9.21875 3.28125H9.6875L9.3125 3.59375L9.4375 4.0625L9.0625 3.78125L8.6875 4.0625L8.8125 3.59375L8.4375 3.28125H8.90625L9.0625 2.8125ZM6.5625 2.8125L6.71875 3.28125H7.1875L6.8125 3.59375L6.9375 4.0625L6.5625 3.78125L6.1875 4.0625L6.3125 3.59375L5.9375 3.28125H6.40625L6.5625 2.8125ZM7.8125 4.6875L7.96875 5.15625H8.4375L8.0625 5.46875L8.1875 5.9375L7.8125 5.65625L7.4375 5.9375L7.5625 5.46875L7.1875 5.15625H7.65625L7.8125 4.6875ZM5.3125 4.6875L5.46875 5.15625H5.9375L5.5625 5.46875L5.6875 5.9375L5.3125 5.65625L4.9375 5.9375L5.0625 5.46875L4.6875 5.15625H5.15625L5.3125 4.6875ZM2.8125 4.6875L2.96875 5.15625H3.4375L3.0625 5.46875L3.1875 5.9375L2.8125 5.65625L2.4375 5.9375L2.5625 5.46875L2.1875 5.15625H2.65625L2.8125 4.6875ZM9.0625 6.5625L9.21875 7.03125H9.6875L9.3125 7.34375L9.4375 7.8125L9.0625 7.53125L8.6875 7.8125L8.8125 7.34375L8.4375 7.03125H8.90625L9.0625 6.5625ZM6.5625 6.5625L6.71875 7.03125H7.1875L6.8125 7.34375L6.9375 7.8125L6.5625 7.53125L6.1875 7.8125L6.3125 7.34375L5.9375 7.03125H6.40625L6.5625 6.5625ZM4.0625 6.5625L4.21875 7.03125H4.6875L4.3125 7.34375L4.4375 7.8125L4.0625 7.53125L3.6875 7.8125L3.8125 7.34375L3.4375 7.03125H3.90625L4.0625 6.5625ZM7.8125 8.4375L7.96875 8.90625H8.4375L8.0625 9.21875L8.1875 9.6875L7.8125 9.40625L7.4375 9.6875L7.5625 9.21875L7.1875 8.90625H7.65625L7.8125 8.4375ZM5.3125 8.4375L5.46875 8.90625H5.9375L5.5625 9.21875L5.6875 9.6875L5.3125 9.40625L4.9375 9.6875L5.0625 9.21875L4.6875 8.90625H5.15625L5.3125 8.4375ZM2.8125 8.4375L2.96875 8.90625H3.4375L3.0625 9.21875L3.1875 9.6875L2.8125 9.40625L2.4375 9.6875L2.5625 9.21875L2.1875 8.90625H2.65625L2.8125 8.4375ZM3.6875 4.0625L4.0625 3.78125L4.4375 4.0625L4.28125 3.59375L4.65625 3.28125H4.1875L4.0625 2.8125L3.90625 3.28125H3.46875L3.84375 3.5625L3.6875 4.0625ZM1.1875 7.8125L1.5625 7.53125L1.9375 7.8125L1.78125 7.34375L2.15625 7.03125H1.71875L1.5625 6.5625L1.40625 7.03125H1.09375C1.09375 7.0625 1.0625 7.09375 1.0625 7.125L1.3125 7.3125L1.1875 7.8125Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_3663">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>




  </ng-template>
  `,

})
export class USAIcon {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template);
      this.viewContainerRef.element.nativeElement.remove();
  }

}
