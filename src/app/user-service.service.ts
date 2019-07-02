

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs';
// import { Observable } from 'rxjs/Observable';


// incapsula tutte le funzionalità necessarie per consumare un REST controller implementato in Spring MVC
@Injectable()
export class UserService {

  private signupUrl: string;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.signupUrl = 'http://localhost:8080/signup';
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public signupUser(user: User) {
    return this.http.post<User>(this.signupUrl, user);
  }
}
