import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  types = ['ALL', 'PRO', 'STREAMER', 'FUNNY']
  active : any 
  storage: any

  // @ViewChild('')
  
  constructor(private route : Router, private activeRout : ActivatedRoute) {
    this.storage = localStorage.getItem('type')
    this.saveLocalStorage()
    // this.pruebas()
  }
  ngOnInit(){
    this.activeRout.queryParams.subscribe((params )=> {
      this.active = params['cat']
      }
    );
  }

  activeButton() {
    if (this.active) {
      this.active = ''
    } else {
      this.active = 'bg-gray-200 shadow-polvillo text-[#222]'
    }
  }

  pruebas(name: string) {
    // this.active = 'bg-gray-200 shadow-polvillo text-[#222]'
    localStorage.setItem('type', name)
    this.active = name
    this.route.navigate(['/miras'],{queryParams :{ cat: this.active}})
    console.log(this.route);
    

  }
  saveLocalStorage() {
    if (this.storage) {
      // this.pruebas('')
    } else {
      localStorage.setItem('type', this.storage = 'ALL')
    }
  }
}
