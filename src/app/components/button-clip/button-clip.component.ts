import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button-clip',
  templateUrl: './button-clip.component.html',
  styleUrls: ['./button-clip.component.css']
})
export class ButtonClipComponent {
  hover !: string;
  @Input() valorDelPadre !: string
  

  constructor(){}


  mouseIn(){
    console.log('entra');
    
    this.hover = "-translate-y-1"
    // return 'bg-white';
  }

  mouseOut(){
    this.hover = ""
  }

  click(){
    navigator.clipboard.writeText(this.valorDelPadre)
    
  }
}
