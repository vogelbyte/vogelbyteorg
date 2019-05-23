import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-medicinetable',
  templateUrl: './medicinetable.component.html',
  styleUrls: ['./medicinetable.component.scss']
})
export class MedicinetableComponent implements OnInit {
  // animations: [
  //   trigger('fadeInOut', [
  //     state('void', style({
  //       opacity: 0
  //     })),
  //     transition('void <=> *', animate(1000)),
  //   ]),

  // ]
  constructor() { }

  ngOnInit() {
  }

}
