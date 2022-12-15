import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFail = false;
  public loginGood = false;
  public loginNotValidate = false;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
      
  }

  login(user: NgForm){
    this.userService.loginFromService(user).subscribe((res) => {
      console.log(res)
      if(res == 1) {
        this.router.navigate(["sidebar"])
      } else if(res == 2) {
        console.log("Pas encore validé, dommage :'(")
        this.loginNotValidate = true;
        setTimeout(() => {
          this.loginNotValidate = false
        }, 2500);
      } else {
        console.log("Identifiant incorrect :/")
        this.loginFail = true;
        setTimeout(() => {
          this.loginFail = false
        }, 2500);
      }
    })
  }
}
