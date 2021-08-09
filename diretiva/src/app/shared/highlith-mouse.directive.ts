import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlithMouse]'
})
export class HighlithMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._rendered.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseleave() {
    // this._rendered.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: String = '';

  @HostBinding('style.backgroundColor') get setColor() {
    //codigo extra
    return this.backgroundColor;

  }

  private backgroundColor: String = '';

  constructor(
    // private _elementRef: ElementRef,
    // private _rendered: Renderer2
    ) {

  }

}
