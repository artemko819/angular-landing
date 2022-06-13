import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  animations:[
    trigger('popOverState',[
      state('show',style({
        opacity:1
      })),
      state('hide',style({
        opacity:0
      })),
      transition('show => hide',animate('600ms ease-out')),
      transition('hide => show',animate('600ms ease-in'))
    ])
  ]
})
export class PopOverComponent implements OnInit {
 @Input() show: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
