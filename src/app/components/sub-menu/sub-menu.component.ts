import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  types = ['ALL', 'PRO', 'STREAMER', 'FUNNY']
  active!: string
  public searcher !: any
  constructor(private route: Router, private activeRout: ActivatedRoute) {
    this.activeRout.queryParams.subscribe((params) => {
      if (params['cat'] === undefined) {
        this.route.navigate(['/miras'], { queryParams: { cat: 'all' } })
      }
    })
  }
  ngOnInit() {
    this.activeRout.queryParams.subscribe((params) => {
      this.active = params['cat'].toUpperCase()
    }
    );
  }

  activeButton(name: string) {
    this.active = name.toLowerCase()
    this.setQueryParams()
  }

  searcherInput() {
    this.active
  }

  setQueryParams() {
    this.route.navigate(['/miras'], { queryParams: { cat: this.active } })
  }

}
