import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public registerUser(user:User){
    console.log("registruojame nauja vartotoja");
    console.log(user);
  }
}


