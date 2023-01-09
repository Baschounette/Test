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

  @Input() usersValidateFilterById: User | undefined
  
  @Output() closeModale: EventEmitter<boolean> = new EventEmitter();

  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  userChangesCloseModale(){
    this.closeModale.emit(false);
  }

  userChange(user: NgForm){
    console.log(user);
    this.usersValidateFilterById.
    this.userService.userChangeFromService(user.value).subscribe(res => {
      this.userChangesCloseModale();
      console.log(res);
      
    })
  }
}
