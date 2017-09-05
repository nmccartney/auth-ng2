import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    LoginService
  ],
  styles:[`
  

  ul li{
    display:inline-block;
    width:50%;
    height:150px;
    padding:10px;
    border:1px solid gray;
  }

  .avatar{
    display:inline-block;
  }
  
  .profile-details{
    padding-left:10px;
    display:inline-block;
  }

  .title{color:gray;}

  `]
})

export class LoginComponent implements OnInit {
  private path;
  private auth;
  private people;

  constructor( private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
    });
  }

  login(){
    
    return this.loginService.list()
        // .subscribe(users => {
        //         console.log('anything ',users);
        //     });
      .then(auth =>{
        this.auth = auth;
        console.log('gotcha',auth);
        let json = JSON.parse(this.auth._body);
        this.people = json.results;
      })
      .catch((error)=>{
        console.log('error ',error);
      });
  }

}
