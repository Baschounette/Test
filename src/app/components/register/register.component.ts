import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private userService: UserService){}

  ngOnInit(): void {
      
  }

  addUser(user : NgForm){
    this.userService.addUserFromService(user.value).subscribe(() => {
      console.log("Utilisateur Ajouté")
    })
  }
}
