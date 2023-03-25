import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService:UserService){}
  signIn(form:NgForm){
    console.log(form);
    this.userService.login(form.value.email,form.value.password);
    this.userService.user.pipe(
      tap(user=>{
        console.log(user);
      })
    ).subscribe();
    form.reset();
  }
}
