import { Injectable } from '@angular/core';
import { Http,Jsonp, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private api = "https://randomuser.me/api/";
  private seedId;//fpr ramdomuser API

  constructor(private http: Http) { }

  list(): Promise <any> {    
    let myApi = this.api + "?results=20";
    return this.http.get(myApi)
      .map( ( res : Response) => res.json() )
      .toPromise();
  }

  get(uid): Promise <any> {    
    let myApi = this.api + "";
    return this.http.get(myApi)
      .map( ( res : Response) => res.json() )
      .toPromise();
  }

}
