import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  styles:[`
    :host{
      display:block;
      margin-bottom:20px;
    }
  `]
})
export class UserCardComponent implements OnInit {

  private showInfo:Boolean = false;

  @Input() user;
  constructor() { }

  ngOnInit() {
  }

  toggleInfo(){
    console.log('toggle');
    return this.showInfo =! this.showInfo;
  }

}
