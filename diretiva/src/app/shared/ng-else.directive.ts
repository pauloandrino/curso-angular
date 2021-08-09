import {
  Directive, Input,
  TemplateRef, ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this._viewCOntainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewCOntainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewCOntainerRef: ViewContainerRef) {
  }

}
