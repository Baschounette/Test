import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

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
  }

  getAllUserNotValidate(){
    this.usersNotValidate = this.users?.filter(user => user.validateByAdmin === false)
    this.validate = false;
  }

  deleteUsers(user: User){
    this.userService.deleteUserFromService(user).subscribe(data => {
      console.log("Utilisateur supprimé");
      this.ngOnInit();
      if(this.validate) {
        this.getAllUserValidate();
      } else {
        this.getAllUserNotValidate();
      }
    })
  }
}
