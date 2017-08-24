import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  get(){
    return new Promise(resolve => resolve({
      token:'this is my token'
    }))
  }
}
