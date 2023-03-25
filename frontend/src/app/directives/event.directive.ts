import { UserService } from './../services/user.service';
import { Directive, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';

@Directive({
  selector: '[appEvent]'
})
export class EventDirective implements OnInit, OnChanges{

  @Input() curr: string = ''; 
  @Input() next: string = ''; 
  @Input() id: string = '';  
  uid:string = '';
  newEvent: Event; 
  @HostListener('click') click() {
    console.log(this.newEvent);
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user.subscribe(
      (user:User | null) => {
        console.log(user);
        this.uid = user?._id || '';
      }
    )
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes)
      this.newEvent = new Event(this.curr, this.next, this.id, this.uid);
  }
}
