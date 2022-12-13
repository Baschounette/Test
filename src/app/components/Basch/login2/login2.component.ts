import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      
  }

  login(user: NgForm){
    this.userService.loginFromService(user).subscribe((res) => {
      console.log(res)
      if(res == 1) {
        console.log("connexion réussi :D")
      } else if(res == 2) {
        console.log("Pas encore validé, dommage :'(")
      } else {
        console.log("Identifiant incorrect :/")
      }
    })
  }
}
