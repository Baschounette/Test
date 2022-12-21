import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public users: User[] | undefined;
  public usersValidate: User[] | undefined;
  public usersNotValidate: User[] | undefined; 
  public validate = false;
  public all = false;

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUserFromService().subscribe((res: User[]) => {
      this.users = res;
    }) 
  }

  getAllUserValidate(){
    this.usersValidate = this.users?.filter(user => user.validateByAdmin === true)
    this.validate = true;
    this.all = false;
  }

  getAllUserNotValidate(){
    this.usersNotValidate = this.users?.filter(user => user.validateByAdmin === false)
    this.validate = false;
    this.all = false;
  }

  getAllUsers(){
    this.validate = false;
    this.all = true;
  }

  // getAllUserValidate(){
  //   this.userService.getAllUserValidateFromService().subscribe((res: User[]) => {
  //     this.users = res;
  //   })
  // }

  // getAllUserNotValidate(){
  //   this.userService.getAllUserNotValidateFromService().subscribe((res: User[]) => {
  //     this.users = res;
  //   })
  // }
}
