import { Directive, HostListener, HostBinding,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  constructor(private elRef:ElementRef) { }
  @HostBinding('class.open') isopen = false;
 

  @HostListener('click') toggle(event:Event) {
    this.isopen = !this.isopen
  
  

}}

