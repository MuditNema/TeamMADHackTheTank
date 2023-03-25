import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  popUp:boolean=false;
  constructor(private userService:UserService){}
  signUp(form:NgForm){
    console.log(form);
    this.userService.signup(form.value.firstName,form.value.lastName,form.value.email,form.value.password);
    this.userService.user.pipe(
      tap(user=>{
        console.log(user);
      })
    ).subscribe();
    // form.reset();
  }
}
