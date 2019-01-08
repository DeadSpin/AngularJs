import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { User } from '../app/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: Http ) { }
  baseUrl: string = "http://localhost:8080";

  // getUsers(){
  //   return this.http.get<User[]>(this.baseUrl+'/listusers.php');
  // }

  login(username, password){
    return this.http.post(this.baseUrl+'/login.php',{"username": username, "password": password}).map(res=>res.json());
  }
}
