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

  getAllUserFromService(): Observable<User[]> {
    return this.http.get('http://localhost:8080/users/allUser') as Observable<User[]>
  }

  getAllUserValidateFromService(): Observable<User[]> {
    return this.http.get('http://localhost:8080/users/allUserValidate') as Observable<User[]>
  }

  getAllUserNotValidateFromService(): Observable<User[]> {
    return this.http.get('http://localhost:8080/users/allUserNotValidate') as Observable<User[]>
  }

  getByIdFromService(): Observable<User[]> {
    return this.http.get('http://localhost:8080/users/getById') as Observable<User[]>
  }

  deleteUserFromService(user: User) {
    return this.http.delete('http://localhost:8080/users/deleteUser?id=' + user.id) 
  }
}