import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public users!: User[];
  public usersValidate!: User[];
  public usersNotValidate!: User[] 
  public validate = false;
  public text = true;
  public userChanges = false;
  public usersValidateFilterByUser!: User[]
  
  constructor(private userService: UserService, private router : Router) { }
  
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
    this.text = false; 

  }

  getAllUserNotValidate(){
    this.usersNotValidate = this.users?.filter(user => user.validateByAdmin === false)
    this.validate = false;
    this.text = false;
  }



  deleteUsers(user: User){
    this.userService.deleteUserFromService(user).subscribe(data => {
      console.log("Utilisateur supprimé");
      this.ngOnInit();
      location.reload()
      if(this.validate) {
        this.getAllUserValidate();
      } else {
        this.getAllUserNotValidate();
      }
    })
  }

  userValidateByAdmin(user: User){
    this.userService.userValidateByAdminFromService(user).subscribe(res => {
      console.log("Utilisateur validé");
      this.ngOnInit();
      location.reload()
    })
  }

  userChangeOpenModale(user: User){
    this.usersValidateFilterByUser = this.usersValidate?.filter((u) => u.id === user.id)!
    this.userChanges = true;
  }

  closeModale(event: boolean){
    this.userChanges = event;
  }
}
