import { UserService } from './../services/user.service';
import { Directive, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appEvent]'
})
export class EventDirective implements OnInit{

  @Input() curr: string = ''; 
  @Input() next: string = ''; 
  @Input() id: string = '641ef04ce515b1ea2f47a2a4';  
  uid:string = '';
  newEvent: Event; 
  @HostListener('click') click() {
    console.log(this.newEvent);
    this.uid=localStorage.getItem('token');
    console.log(this.uid);
    this.http.put(
      'http://localhost:3000/scholar/updateScholarShip',
      {
        id:this.id,
        curr:this.curr,
        next:this.next,
        uid:this.uid,
      }
    ).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

  constructor(private userService: UserService,private http:HttpClient) {}

  ngOnInit(): void {
    this.uid=localStorage.getItem('token');
    console.log(this.uid);
  }
}
