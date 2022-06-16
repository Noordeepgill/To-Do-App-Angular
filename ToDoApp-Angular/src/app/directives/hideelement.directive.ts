import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideelement]'
})
export class HideelementDirective implements OnInit{

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
  }

}
