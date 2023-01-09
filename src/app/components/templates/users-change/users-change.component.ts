import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-change',
  templateUrl: './users-change.component.html',
  styleUrls: ['./users-change.component.css']
})
export class UsersChangeComponent implements OnInit {
  
  @Input() usersValidateFilterByUser!: User[];
  public userChanged!: User;

  @Output() closeModale: EventEmitter<boolean> = new EventEmitter();

  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  userChangesCloseModale(){
    this.closeModale.emit(false);
  }

  userChange(user: NgForm){
    this.userChanged = this.usersValidateFilterByUser.at(0)!;
    this.userChanged.name = user.value.name
    this.userChanged.password = user.value.password
    this.userChanged.mail = user.value.mail
    this.userChanged.role = user.value.role
    this.userService.userChangeFromService(this.userChanged).subscribe(res => {
      this.userChangesCloseModale();
      console.log(res);
    })
  }
}
