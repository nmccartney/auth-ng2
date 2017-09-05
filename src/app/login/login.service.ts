import { Injectable } from '@angular/core';
import { Http,Jsonp, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private seedId;

  constructor(private http: Http, private jsonp:Jsonp) { }

  get():Promise<any>{

    var ref = "http://192.168.1.231:3000/bell/door";
    // ?c=http://192.168.1.231:3000/restricted";

    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });

    console.log('go!');
    
    return this.http.get(ref).toPromise()
    // return this.jsonp.get(ref).toPromise()
      // .map((response: Response) => {
      //   console.log('resp :' ,response);
      //   response.json();
      // })

    // return new Promise(resolve => resolve({
    //   token:'this is my token'
    // }));

  }

  list(): Promise <any> {
    let api = "https://randomuser.me/api/?results=100";
    return this.http.get(api).toPromise();
  }
}
