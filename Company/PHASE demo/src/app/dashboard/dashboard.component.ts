import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {slider} from '../route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ 
     slider,
  ],
  encapsulation:ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  isMenuOpen=true;
  constructor() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit() {
  }
   
   
}


