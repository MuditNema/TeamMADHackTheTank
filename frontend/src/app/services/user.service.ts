import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}
    user=new Subject<User | null>;
    login(email:string,password:string){
        this.http.post(
            'http://localhost:3000/user/login',
            {
                email,
                password
            }
        ).subscribe(
            (temp:any)=>{
                console.log(temp);
                let newUser=new User(temp.user.fname,temp.user.lname,temp.user.email,temp.user._id);
                this.user.next(newUser);
            }
        )
    }
    signup(firstName:string,lastName:string,email:string,password:string){
        this.http.post(
            'http://localhost:3000/user/signup',
            {
                fname:firstName,
                lname:lastName,
                email,
                password
            }
        ).subscribe(
            (temp:any)=>{
                // console.log(temp);
                let newUser=new User(temp.data.fname,temp.data.lname,temp.data.email,temp.data._id);
                this.user.next(newUser);
            }
        )
    }
    verifyEmail(code:string){
        return this.http.post(
            'http://localhost:3000/user/verifyEmail',
            {},
            {
                headers:new HttpHeaders({
                    'authorization':code
                }),
            }
        )
    }
    sendVerificationMail(email:string){
        console.log(email);
        return this.http.post(
            'localhost:3000/sendVerificationMail',
            {
                email
            }
        )
    }
    logOut(){
        this.user.next(null);
    }
}
