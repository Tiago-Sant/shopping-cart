import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverAtribute]',
})
export class HoverAtributeDirective {
  constructor(private _elementeRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'cursor',
      'pointer'
    );

    this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'transition',
      'filter ease 0.2s'
    );

    this._renderer.listen(
      this._elementeRef.nativeElement,
      'mouseover',
      (event) =>
        this._renderer.setStyle(
          this._elementeRef.nativeElement,
          'filter',
          'brightness(0.9)'
        )
    );

    this._renderer.listen(
      this._elementeRef.nativeElement,
      'mouseout',
      (event) =>
        this._renderer.setStyle(
          this._elementeRef.nativeElement,
          'filter',
          'brightness(1)'
        )
    );
  }
}
