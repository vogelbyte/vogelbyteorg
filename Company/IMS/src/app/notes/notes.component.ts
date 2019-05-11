import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class NotesComponent implements OnInit {


        height: number = 311;
        mainheight: number = 622;
        historypanelheight :number=311;
        onResizeEnd(event: ResizeEvent) {
        if (event) {
        console.log(event);
        if (event.rectangle.height != null) {
        this.height = event.rectangle.height;
        this.historypanelheight=this.mainheight-this.height;
        }
        }
        }
        // getRandomColor() {
        //   var color = Math.floor(0x1000000 * Math.random()).toString(16);
        //   return '#' + ('000000' + color).slice(-6);
        //   }
  constructor() { }

  ngOnInit() {
  }

}
