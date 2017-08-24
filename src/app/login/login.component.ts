import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    LoginService
  ]
})

export class LoginComponent implements OnInit {
  private path;
  private auth;

  constructor( private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
    });
  }

  login(){
    
    return this.loginService.get().then(auth =>{
      this.auth = auth;
      console.log('gotcha',this.auth);
    })
  }

}
