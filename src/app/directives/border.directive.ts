import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      '1px solid blue'
    );
  }
}
