import { Component, OnInit } from '@angular/core';

import {UserService} from './../user.service';

@Component({
  selector: 'app-user-find',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.scss'],
  providers: [
    UserService
  ],
  styles:[`
    :host{
      display:block;
      padding:20px;
      background:rgba(0,0,0,0.25);
    }
  `]
})
export class UserFindComponent implements OnInit {

  private users;

  constructor(private userService:UserService) { }

  ngOnInit() {
    return this.userService.list()
      .then(resp =>{
        console.log('gotcha!!',resp);
        this.users = resp.results;
      })
      .catch((error)=>{
        console.log('error ',error);
      });
  }

}
