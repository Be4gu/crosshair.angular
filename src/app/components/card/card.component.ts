import { Component } from '@angular/core';
import { CROSSHAIR } from 'data/miras';
import { Miras } from 'model/miras';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public miras !: Miras[]

 constructor( private activeCat : ActivatedRoute){
  this.crossFilter()
 }

 crossFilter(){
  this.activeCat.queryParams.subscribe((params) =>{
    const catActive = params['cat'].toLowerCase()
    
    if (catActive ==='all') {
      this.miras = CROSSHAIR  
    }else{
      this.miras = CROSSHAIR.filter(cat => cat.type === catActive)
    }
  })
 }
 
}
