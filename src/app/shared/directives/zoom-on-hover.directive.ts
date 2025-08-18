import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomOnHover]',
})
export class ZoomOnHoverDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  constructor() {
    this.setInitialStyles();
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease, opacity 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.2)');
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.85');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
  }
}
