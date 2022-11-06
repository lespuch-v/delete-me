import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})



export class TestDirectiveDirective {
//   private domElement: any;
//
//   constructor(private elementRef: ElementRef) {
//     this.domElement = this.elementRef.nativeElement;
//     const newStyles = {
//       'background-color': 'yellow',
//       'color': '#A020F0',
//       'font-weight': 'bold',
//       //...and so on
//     };
//     Object.keys(newStyles).forEach(element => {
//       // @ts-ignore
//       this.domElement.style.setProperty(`${element}`,newStyles[element]);
//     })
//
//   }
// //Other logic required for the directive...

  @Input('appTestDirective') appTestDirective: boolean | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    if(this.appTestDirective){
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'my-button-titanic'
      );
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'my-border-class'
      );
    }
  }
}

