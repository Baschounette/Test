import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-users-change',
  templateUrl: './users-change.component.html',
  styleUrls: ['./users-change.component.css']
})
export class UsersChangeComponent implements OnInit {

  constructor(private userService: UserService){}

  ngOnInit(): void {
      
  }

  formClose(){
    this.userService.userChange = false;
  }
}
