import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService:UserService, private router: Router){}
  signIn(form:NgForm){
    console.log(form);
    this.userService.login(form.value.email,form.value.password);
    this.userService.user.pipe(
      tap(user=>{
        console.log(user);
        if(user) this.router.navigate(['/scholarship']);
      })
    ).subscribe();
    form.reset();
  }
}
