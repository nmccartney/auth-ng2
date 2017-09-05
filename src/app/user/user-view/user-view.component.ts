import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  providers: [
    UserService
  ],
  styles:[`

  `]
})
export class UserViewComponent implements OnInit {

  private user;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.get('asdf')
      .then(resp =>{
        console.log('gotcha!!',resp);
        this.user = resp.results[0];
      })
      .catch((error)=>{
        console.log('error ',error);
      });
  }

}
