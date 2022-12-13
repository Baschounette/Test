import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    constructor(private http:HttpClient) { }

    addUserFromService(user: User){
        return this.http.post('http://localhost:8080/users/addUser', user)
    }

    loginFromService(user: NgForm) {
      return this.http.get('http://localhost:8080/users/login?name=' + user.value.name + '&password=' + user.value.password)
    }
  }